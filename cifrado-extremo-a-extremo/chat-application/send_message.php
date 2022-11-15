<?php

include_once("./server.php");

$json_body = file_get_contents('php://input');
$object = json_decode($json_body);

$response = send_message($object->id_user_sender, $object->id_user_target, $object->body_message);

echo json_encode($response);

?>