<?php
// check if fields passed are empty
if(   empty($_POST['email']) 		||
   empty($_POST['message'])	||
   empty($_POST['name'])	||
   !filter_var($_POST['email'],FILTER_VALIDATE_EMAIL))
   {
	echo "No arguments Provided!";
	return false;
   }


$email_address = 'valentines-day-traditions@vashi.com'; // put your email
$message = $_POST['message'];
$name = $_POST['name'];

// create email body and send it	
$to = $_POST['email'];
$email_subject = "Valentine's Traditions From Around The World ";
$email_body = "$name wants to share this romantic Valentines tradition with you!<br/><br/><br/>$message";
$headers = "MIME-Version: 1.0\r\n";
$headers.= "Content-type: text/html; charset=utf-8\r\n";
$headers.= "From: valentines-day-traditions@vashi.com"."\r\n";
$headers.= "Reply-To: $email_address";
mail($to,$email_subject,$email_body,$headers);
return true;
?>