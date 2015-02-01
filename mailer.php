<?php

   openlog("mailer_log", LOG_NDELAY, LOG_LOCAL2);
   openlog("myapp", LOG_NDELAY, LOG_LOCAL2);
2	syslog(LOG_ERR, "Testing php and syslog");

	// Assign contact info
	$name = stripcslashes($_POST['name']);
	$mail = stripcslashes($_POST['mail']);
   $text = stripcslashes($_POST['text']);
	$subject = '[Slub] Kontakt: ' . $name ;
	
   $to  = 'sylwia.klorek@gmail.com' . ', '; // note the comma
   $to .= 'matej.mistrzu@gmail.com';

	// Set headers
	$headers  = 'MIME-Version: 1.0' . "\r\n";
	$headers .= 'Content-type: text/html; charset=iso-8859-1' . "\r\n";
   
   // Additional headers
   $headers .= 'To: Sylwia Klorek <sylwia.klorek@gmail.com>, Mateusz Nowak <matej.mistrzu@gmail.com>' . "\r\n";
   $headers .= 'From: <' . $mail . '>' . "\r\n";


	// Format message
	$contactMessage =
	"<div>   $text
    <br />
    <br />
	<strong>Sent via:</strong> $_SERVER[HTTP_HOST]</p>
	</div>";

	// Send and check the message status
	$response = (mail($to, $subject, $contactMessage, $headers) ) ? "success" : "failure" ;
	$output = json_encode(array("response" => $response));
   syslog(LOG_INFO, "Send mail: $response, $name, $mail, \"$text\"");
	header('content-type: application/json; charset=utf-8');
   closelog();
	echo($output);
   
?>
