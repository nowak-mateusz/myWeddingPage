<?php
	// Assign contact info
	$name = stripcslashes($_POST['name']);
	$attendance = stripcslashes($_POST['attendance']);
	$subject = '[WEDDING][RSVP]';
	
	// Set headers
	$headers  = 'MIME-Version: 1.0' . "\r\n";
	$headers .= 'Content-type: text/html; charset=iso-8859-1' . "\r\n";

	// Format message
	$contactMessage =
	"<div>
	<p><strong>Name:</strong> $name <br />
	<strong>Will be attending wedding?:</strong> $attendance <br />

	<strong>Sent via:</strong> $_SERVER[HTTP_HOST]</p>
	</div>";

	// Send and check the message status
	$response = (mail('philipbeel@googlemail.com, keep.jacqui@googlemail.com', $subject, $contactMessage, $headers) ) ? "success" : "failure" ;
	$output = json_encode(array("response" => $response));

	header('content-type: application/json; charset=utf-8');
	echo($output);

?>