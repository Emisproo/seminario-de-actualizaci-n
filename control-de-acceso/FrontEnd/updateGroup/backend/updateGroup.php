<?php

include_once( "../../lib/database.php");


$json_body = file_get_contents('php://input');
$object = json_decode($json_body);

$group_id = $object->group_id;
$new_name = $object->new_name;
$new_description = $object->$new_description;

try
{
	//Todo tipo de validación de información, debe ser realizada aquí de manera obligatoria
	//ANTES de enviar el comando SQL al motor de base de datos.

	$SQLStatement = $this->connection->prepare("CALL `updateGroup`(:group_id, :new_name, :new_description)");
	$SQLStatement->bindParam( ':group_id', $group_id );
	$SQLStatement->bindParam( ':new_name', $new_name );
	$SQLStatement->bindParam( ':new_description', $new_description );
	$SQLStatement->execute();

	$status = array( 'status'=>'ok', 'description'=>'Grupo actualizado Satisfactoriamente!' );

    echo json_encode($status);
}
catch( PDOException $connectionException )
{
    $status = array( 'status'=>'db-error (updateGroup.php', 'description'=>$connectionException->getMessage() );
    echo json_encode($status);
    die();
}

?>