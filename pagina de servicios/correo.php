<?php
$mail = $_POST['correo'];
$name = $_POST['asunto'];
$mensaje = $_POST['mensaje'];

$header= 'From: ' . $mail . "\r\n";
$header.= "x-mailer: PHP/" . phpversion() . "\r\n";
$header.= "Mine-version: 1.0 \r\n";
$header.= "Content-Type: text/plain";

$message= "Este mensaje fue enviado por; " . $name . "\r\n";
$message.="Su e-mail es: " .$mail . "\r\n";
$message.="mensaje: " . $mensaje . "\r\n";
$message.="Enviado el: " . date('d/m/Y', time());

$para = "online.pagetuwebsite@gmail.com";
$asunto= "datos";

mail($para, $asunto, utf8_decode($message), $header);

header("Location:index.html");
?>
<?php
$suscribir = $_POST['suscribir_correo'];

$header= 'From: ' . $suscribir . "\r\n";
$header.= "x-mailer: PHP/" . phpversion() . "\r\n";
$header.= "Mine-version: 1.0 \r\n";
$header.= "Content-Type: text/plain";

$message= "Este mensaje fue enviado por; " . $suscribir . "\r\n";
$message.="Su e-mail es: " .$suscribir . "\r\n";
$message.="Enviado el: " . date('d/m/Y', time());

$para = "online.pagetuwebsite@gmail.com";
$asunto= "suscribirse";

mail($para, $asunto, utf8_decode($message), $header);

header("Location:index.html");
?>

