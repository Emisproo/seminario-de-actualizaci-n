<?php

//openssl_encrypt($string, $encrypt_method, $key)
//openssl_decrypt($string, $encrypt_method, $key);

function connect_users( $id_user_a, $id_user_b )
{
    //Acá haría varias cosas.. pero al final, 
    //Debe devolver la clave simétrica.

    return generate_key('A','B');
}

function disconnect_users( $id_user_a, $id_user_b )
{
 //destruye los mensajes
}

function send_message( $id_user_sender, $id_user_target, $body_message )
{
    //SE GUARDA EN _SESSION
    $_SESSION;
    return true;
}

function generate_key( $id_user_sender, $id_user_target )
{
    return hash('sha256', uniqid() );
}

function get_messages( $id_user )
{
    //leer el lugar donde están los mensajes en el servidor, quitarlos y retonarlos 
}

?>