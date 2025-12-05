<?php
header('Content-type: text/html; charset=utf-8');
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

require './PHPMailer/src/Exception.php';
require './PHPMailer/src/PHPMailer.php';
require './PHPMailer/src/SMTP.php';

// Primeiro setamos o cabeçalho:
$header = "Content-type: text/html; charset=utf-8\r\n";
// Charset
//$mail->CharSet = 'UTF-8';
// Instanciamos o objeto
$mail = new PHPMailer();
// Informamos que vamos enviar através de SMTP
$mail->IsSMTP();
// Colocamos o servidor smtp
$mail->Host = "mail.50webs.com";
// Porta
$mail->Port = 465; // A porta para SSL geralmente é 465
// Se seu servidor de smtp necessita de autenticação, devemos habilitar este item:
$mail->SMTPAuth = true;
// Colocamos agora o usuário e senha do servidor smtp
$mail->Username = "contact@atacamafashionweek.com";
$mail->Password = "@rtPl@2024";
// Agora vamos informar qual email vai aparecer como remetente
$mail->From = "contact@atacamafashionweek.com";
$mail->FromName = "Atacama Fashion Week";
// Definimos SSL
$mail->SMTPSecure = 'ssl';
?>