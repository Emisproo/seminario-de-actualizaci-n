<?php

include_once( "../../lib/database.php");


$json_body = file_get_contents('php://input');
$object = json_decode($json_body);

$new_name = $object->new_name;
$name = $object->$name;
$password = $object->password;

try
{
	//Todo tipo de validación de información, debe ser realizada aquí de manera obligatoria
	//ANTES de enviar el comando SQL al motor de base de datos.

	$SQLStatement = $this->connection->prepare("CALL `updateGroup`( :new_name, :name, :password,)");
	$SQLStatement->bindParam( ':new_name', $new_name );
	$SQLStatement->bindParam( ':name', $name );
    $SQLStatement->bindParam( ':password', $password );
	$SQLStatement->execute();

	$status = array( 'status'=>'ok', 'description'=>'Usuario actualizado Satisfactoriamente!' );

    echo json_encode($status);
}
catch( PDOException $connectionException )
{
    $status = array( 'status'=>'db-error (updateUser.php', 'description'=>$connectionException->getMessage() );
    echo json_encode($status);
    die();
}

?>