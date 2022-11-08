<?php

include_once( "./database.php");


//Esto hay que cambiarlo.. en este caso, no espero usuario/contraseña. espero un "potencial" token de sesión.
$token;

function validateToken($token)
{
    try
    {
        //global $connection;
        //Consultar a la base de datos la existencia de ese potencial token de sesión..
        //Y determinar además, que en caso de existir, que no esté expirado.
        $SQLStatement = $connection->prepare("CALL `validate_token`(:token)");
        $SQLStatement-> bindParam(':token', $token);
        $SQLStatement-> execute();
        $response = $SQLStatement-> fetcAll(PDO::FETCH_ASSOC);
        if($response != 0)
        {
            $token = true;
        }
        return $token;
        $status = array( 'status'=>'db-error ', 'description'=>'nada' );
        echo json_encode($status);
    }
    catch( PDOException $connectionException )
    {
        $status = array( 'status'=>'db-error ', 'description'=>$connectionException->getMessage() );
        echo json_encode($status);
        die();
    }
}
?>
