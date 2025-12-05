<?php
header('Content-type: application/json; charset=utf-8'); // Mudança de content-type para application/json
include("link.php");
$conn->set_charset('utf8');

$image = "SELECT image FROM contatos";
$result = $conn->query($image);

$data = array(); // Inicializa um array para armazenar os resultados

while($row = mysqli_fetch_assoc($result)) {
    $data[] = $row; // Adiciona cada linha ao array $data
}

echo json_encode($data); // Converte o array $data em JSON e o envia de volta para o JavaScript
?>