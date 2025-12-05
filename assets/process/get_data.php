<?php
// Incluir arquivo de conexão com o banco de dados
include("link.php");

// Consulta SQL para obter o número total de linhas
$sql = "SELECT COUNT(*) as total_linhas FROM email";
$result = $conn->query($sql);

// Verificar se a consulta retornou resultados
if ($result->num_rows > 0) {
    // Obter o número total de linhas
    $row = $result->fetch_assoc();
    $total_linhas = $row['total_linhas'];

    // Retornar o número total de linhas como JSON
    echo json_encode(array("total_linhas" => $total_linhas));
} else {
    // Se não houver resultados, retornar uma mensagem de erro
    echo json_encode(array("error" => "Nenhuma linha encontrada."));
}

// Fechar a conexão com o banco de dados
$conn->close();
?>