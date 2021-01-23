<?php
// Файлы phpmailer
require 'phpmailer/PHPMailer.php';
require 'phpmailer/SMTP.php';
require 'phpmailer/Exception.php';

// Переменные, которые отправляет пользователь

$name = $_POST['name'];
$phone = $_POST['phone'];
$email = $_POST['email'];


// Формирование самого письма
// $title = "Новый подписчик";
// $body = "
// <h2>Новое письмо</h2>
// <b>Почта:</b> $email<br><br>
// ";

if (isset($_POST['email1'])) {
    $title = "Новый подписчик";
    $body = "
    <h2>Новое письмо</h2>
    <b>Почта:</b> $email<br><br>
";
} else if (isset($_POST['Modal'])) {
    $title = "Вход";
    $body = "
    <h2>Спасибо</h2>
<b>Имя:</b> $name<br>
<b>Телефон:</b> $phone<br>
<b>Почта:</b> $email<br><br>
";
}
// Настройки PHPMailer
$mail = new PHPMailer\PHPMailer\PHPMailer();
try {
    $mail->isSMTP();   
    $mail->CharSet = "UTF-8";
    $mail->SMTPAuth   = true;
    // $mail->SMTPDebug = 2;
    $mail->Debugoutput = function($str, $level) {$GLOBALS['status'][] = $str;};

    // Настройки вашей почты
    $mail->Host       = 'smtp.gmail.com'; // SMTP сервера вашей почты
    $mail->Username   = 'sementsovmikha@gmail.com'; // Логин на почте
    $mail->Password   = 'vvqcfwvcmxxrtdbg'; // Пароль на почте
    $mail->SMTPSecure = 'ssl';
    $mail->Port       = 465;
    $mail->setFrom('sementsovmikha@gmail.com', 'Михаил Семенцов'); // Адрес самой почты и имя отправителя

    // Получатель письма
    $mail->addAddress('delaporabote@mail.ru');  
    // $mail->addAddress('youremail@gmail.com'); // Ещё один, если нужен

    // Прикрипление файлов к письму

// Отправка сообщения
$mail->isHTML(true);
$mail->Subject = $title;
$mail->Body = $body;    

// Проверяем отравленность сообщения
if ($mail->send()) {$result = "success";} 
else {$result = "error";}

} catch (Exception $e) {
    $result = "error";
    $status = "Сообщение не было отправлено. Причина ошибки: {$mail->ErrorInfo}";
}
header('Location: thankyou.html');
?>