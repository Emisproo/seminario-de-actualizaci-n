<?php
$connection = null;

try
{
    $connection = new PDO('mysql:host=127.0.0.1:3306;dbname=access-control-component', 'Emi3','emi2');
    $connection->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);   
}
catch(PDOException $connectionException)
{
    //throw new Exception("Error data",1 );
    $status = array('status'=>'db-ERROR', 'description'=>$connectionException->getMessage());
    echo json_encode($status);
}
?>