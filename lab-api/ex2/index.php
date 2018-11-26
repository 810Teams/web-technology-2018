<!DOCTYPE html>

<html lang="en">
	<head>
		<meta charset="utf-8">
		<meta name="viewport" content="width=device-width, initial-scale=1.0">
		<meta http-equiv="X-UA-Compatible" content="ie=edge">
		<title>WebTech Lab 10 - ex2</title>
	</head>

	<body>
		<form action="" method="POST">
			<label for="id">ID :</label>
			<input type="text" name="id" placeholder="Enter ID" required/>
			<button type="submit" name="submit">Submit</button>
		</form>

		<?php
			// Setup
			if(isset($_POST["id"])) {
				$client = curl_init("http://boss-wt-api.000webhostapp.com/api/messages/?id=".$_POST["id"]);
				curl_setopt($client, CURLOPT_RETURNTRANSFER, true);
				$result = json_decode(curl_exec($client), false); // Response to Result

				echo "<p>";
				echo "<b>ID : </b>".$result->id."<br>";
				echo "<b>Text : </b>".$result->text."<br>";
				echo "<b>Author : </b>".$result->author."<br>";
				echo "<b>Timestamp : </b>".$result->timestamp."<br>";
				echo "</p>";
			}
		?>
	</body>

</html>
