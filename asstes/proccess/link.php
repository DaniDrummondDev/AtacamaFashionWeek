
<?php

ini_set('display_errors', 1);
ini_set('display_startup_erros', 1);
error_reporting(E_ALL);


//Arquivo de Conexão com Banco
$servername = "localhost";
$database = "isrcar_atacama";
$username = "isrcar_atacama";
$password = "iPro1980@@";



//Criar Conexão
$conn = mysqli_connect($servername, $username, $password, $database);
// Check Conexão
if (!$conn) {
    die("Connection failed: " . mysqli_connect_error());
}


?>