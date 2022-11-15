<?php

include_once( "./database.php");


$json_body = file_get_contents('php://input');
$object = json_decode($json_body);

$password = $object->password;
$username = $object->username;

try
{
	//Todo tipo de validación de información, debe ser realizada aquí de manera obligatoria
	//ANTES de enviar el comando SQL al motor de base de datos.

	$SQLStatement = $connection->prepare("CALL `auth_user`(:username, :password)");
	$SQLStatement->bindParam( ':username', $username );
	$SQLStatement->bindParam( ':password', $password );
	$SQLStatement->execute();
	//procesar las respuestas posibles del procedimiento almacenado
	$db_response= $SQLStatement->fetchAll(PDO::FETCH_ASSOC);

	if (count($db_response)!=0)
	{
		$id_user= $db_response[0]["id_user"];
		$response_client = ["status" => "OK", "response" => $id_user];
	}
	else
	{
		//caso desfavorable
		$response_client = ["status" => "ERROR", "description" => 'Usuario y/o contraseña errónea'];
	}
	//var_dump($db_response);
	//elaboramos la respuesta para constetar
	//$status = array( status=>'ok', description=>'Usuario Validado Satisfactoriamente!' );
	//si no devuelve nada es xq no exixte o estaba mal 
    echo json_encode($response_client);
}
catch( PDOException $connectionException )
{
    $status = array( status=>'db-error ', description=>$connectionException->getMessage() );
    echo json_encode($status);
    die();
}

?>
