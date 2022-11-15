<?php

include_once( "../../lib/database.php");


$json_body = file_get_contents('php://input');
$object = json_decode($json_body);

$name = $object->name;

try
{
	//Todo tipo de validación de información, debe ser realizada aquí de manera obligatoria
	//ANTES de enviar el comando SQL al motor de base de datos.

	$SQLStatement = $this->connection->prepare("CALL `deleteGroup`(:name)");
	$SQLStatement->bindParam( ':name', $name );
	$SQLStatement->execute();

	$status = array( 'status'=>'ok', 'description'=>'Grupo eliminado Satisfactoriamente!' );

    echo json_encode($status);
}
catch( PDOException $connectionException )
{
    $status = array( 'status'=>'db-error (deleteGroup.php', 'description'=>$connectionException->getMessage() );
    echo json_encode($status);
    die();
}

?>