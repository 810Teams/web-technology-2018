<!DOCTYPE html>
<html>
	<head>
		<meta charset="utf-8" />
		<meta http-equiv="X-UA-Compatible" content="IE=edge">
		<title>Page Title</title>
		<meta name="viewport" content="width=device-width, initial-scale=1">
		<link rel="stylesheet" type="text/css" media="screen" href="style.css" />
	</head>
	<body>
		<?php
			$client = curl_init("http://boss-wt-api.000webhostapp.com/api/maps/");
			curl_setopt($client, CURLOPT_RETURNTRANSFER, true);
			$result = json_decode(curl_exec($client), false);

			echo "<p id=\"lat\">".$result->lat."</p>";
			echo "<p id=\"long\">".$result->long."</p>";
		?>

		<iframe src="https://maps.google.com/maps?q=<?php echo $result->lat.",".$result->long ?>&t=&z=13&ie=UTF8&iwloc=&output=embed" frameborder="0" id="map"></iframe>
	</body>
</html>