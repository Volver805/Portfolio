<?php
    $email = $_POST['email'];
    $subject = $_POST['sub'];
    $message = $_POST['message'];
    $to = "uglysnipy@gmail.com";
    $headers = 'From:SuperDesigner.me \r\n Sender: '.$email;
    mail($to,$subject,$message,$headers);
    echo "success";
?>