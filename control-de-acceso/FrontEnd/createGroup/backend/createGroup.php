<?php

include_once( "../../lib/database.php");


$json_body = file_get_contents('php://input');
$object = json_decode($json_body);

$name = $object->name;
$description = $object->description;

try
{
	//Todo tipo de validación de información, debe ser realizada aquí de manera obligatoria
	//ANTES de enviar el comando SQL al motor de base de datos.

	$SQLStatement = $this->connection->prepare("CALL `createGroup`(:description, :name)");
	$SQLStatement->bindParam( ':description', $description );
	$SQLStatement->bindParam( ':name', $name );
	$SQLStatement->execute();

	$status = array( 'status'=>'ok', 'description'=>'Grupo Creado Satisfactoriamente!' );

    echo json_encode($status);
}
catch( PDOException $connectionException )
{
    $status = array( 'status'=>'db-error (createGroup.php', 'description'=>$connectionException->getMessage() );
    echo json_encode($status);
    die();
}

?>