<?php

include_once("./server.php");

$json_body = file_get_contents('php://input');
$object = json_decode($json_body);

$messages = get_messages($object->id_user);

echo json_encode($messages);
?>