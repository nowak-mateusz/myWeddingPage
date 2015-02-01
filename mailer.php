<?php

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


   // Backup to txt file:
   $myFile = "contactMsg.txt";
   $fh = fopen($myFile, 'a') or die("can't open file");
   $stringData = "Send mail: $response, $name, $mail, \"$text\"\r\n";
   fwrite($fh, $stringData);
   fclose($fh);

	echo($output);
   
?>
