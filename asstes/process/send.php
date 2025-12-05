<?php
header('Content-type: text/html; charset=utf-8');
include("link.php");
$conn->set_charset('utf8');

ini_set('display_errors', 1);
ini_set('display_startup_errors', 1);
error_reporting(E_ALL);

include('email.php');

//Variáveis
$data_envio = date('d/m/Y');
$hora_envio = date('H:i:s');
// Decodificar o JSON do corpo da solicitação
$dados = json_decode(file_get_contents('php://input'), true);

if (isset($dados['marca'])) {

    $marca = $dados['marca'];

    $marcaBD = "SELECT marca FROM contatos WHERE marca = '$marca'";
    $compareMarca = $conn->query($marcaBD);
    $marcaValid =  $compareMarca->fetch_assoc();


    if ($marcaValid && $marca == $marcaValid['marca']) {

        //Consultar imagem

        $imagemarca = "SELECT imagens FROM contatos WHERE marca = '$marca'";
        $resultImage = $conn->query($imagemarca);
        $image = $resultImage->fetch_assoc();

        //Criar Rota da imagem Template

        $path = "https://atacamafashionweek.com/assets/templates/";
        $template = $path . $image['imagens'] . ".jpg";

        //Consultar emails

        $emailmarca = "SELECT email FROM contatos WHERE marca = '$marca'";
        $result = $conn->query($emailmarca);
        $email = $result->fetch_assoc();


        // Corpo E-mail
        $arquivo = "

        <head>
    <meta charset='UTF-8'>
    </head>
    <style type='text/css'>
        body {
            margin: 0px;
            font-family: Verdana;
            font-size: 12px;
            color: #f5f0f0;
        }
        a {
            color: #383838;
            text-decoration: none;
        }
        a:hover {
            color: #FF0000;
            text-decoration: none;
        }
    </style>
    <html>
    
    <table width='600' border='0' cellpadding='0' cellspacing='25' style='text-align:center'  align='center'>
        <tr>
            <td style='padding: 25px'>
            <img src='$template' width='600'>
            </td>
        </tr>
    </table>
    
    <table width='600' border='0' cellpadding='0' cellspacing='55' style='text-align:center'  align='center'>
        <tr>
            <td style='padding: 25px'>
            <h6 style='color: #383838'>This email was sent on <b>$data_envio</b> às <b>$hora_envio</b></h6>
            <h6 style='color: #383838'>This is an automatic email from the platform <a href:'https://atacamafashionweek.com'>ATACAMA FASHION WEEK</a></h6>
            </td>
        </tr>
    </table>
    
    </html>";

        //Enviar Email para Marca
        //Destinatários
        $mail->AddAddress($email['email'], 'Atacama Fashion Week');
        //Podemos setar qual é o tamanho do texto por linha pra quebrar a linha de forma automática
        //$mail->WordWrap = 50;
        //Charset UTF8
        $mail->CharSet = 'UTF-8';
        //HTML
        $mail->IsHTML(true);
        //Setar Lingua
        $mail->SetLanguage("br");
        //Vamos colocar o assunto do email
        $mail->Subject = "ATACAMA FASHION WEEK";
        //Colocamos o texto do email
        $mail->Body = $arquivo;
        //e mandamos enviar:
        if (!$mail->Send()) {
            //Exibimos o erro ocorrido
            echo  "<script>alert('Informações não enviadas.<br>
                      por favor, entre contato com suporte, pelo email:<br>
                      contact@atacamafashionweek.com');
        window.location.href = '../index.html';        
        </script>";
            die('Não Funcionou1');
            //     echo $mail->ErrorInfo;
        }

        //Inserir Dados
        $sql_infos = "INSERT INTO email (marca) VALUES ('$marca')";
        $dados = $conn->query($sql_infos) or die("Falha na execução do código SQL:" . $conn->error);


        $conn->close();
    }
} else {
    echo  "<script>alert('Ops! Algo deu errado! Tente novamente mais tarde.');
        window.location.href = '../index.html';        
        </script>";
};
