<!DOCTYPE html>

<html lang="en">

	<head>
		<meta charset="utf-8">
		<meta name="viewport" content="width=device-width, initial-scale=1.0">
		<meta http-equiv="X-UA-Compatible" content="ie=edge">
		<title>WebTech Lab 10 - ex1</title>
	</head>

	<body>
		<?php
			// Setup
			$client = curl_init("http://boss-wt-api.000webhostapp.com/api/messages/");
			curl_setopt($client, CURLOPT_RETURNTRANSFER, true);
			$result = json_decode(curl_exec($client)); // Response to Result

			foreach ($result->messages as $each) {
				echo "<p>";
				echo "<b>ID : </b>".$each->id."<br>";
				echo "<b>Text : </b>".$each->text."<br>";
				echo "<b>Author : </b>".$each->author."<br>";
				echo "<b>Timestamp : </b>".$each->timestamp."<br>";
				echo "</p>";
			}
		?>
	</body>

</html>
