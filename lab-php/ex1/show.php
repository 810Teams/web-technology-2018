<!DOCTYPE html>

<html>

  <head>
    <meta charset="utf-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <title>Show</title>
    <meta name="viewport" content="width=device-width, initial-scale=1">
   </head>

  	<body>   
	  	<div>
			<div>
				<?php
					if (strlen($_POST["nationalId"]) < 5) {
						echo "<p style=\"color: red;\">".$_POST["nationalId"]."</p>";
					} else {
						echo "<p>".$_POST["nationalId"]."</p>";
					}
				?>
			</div>
			<div>
				<?php
					if (strlen($_POST["firstName"]) < 5) {
						echo "<p style=\"color: red;\">".$_POST["firstName"]."</p>";
					} else {
						echo "<p>".$_POST["firstName"]."</p>";
					}
				?>
			</div>
			<div>
				<?php
					if (strlen($_POST["lastName"]) < 5) {
						echo "<p style=\"color: red;\">".$_POST["lastName"]."</p>";
					} else {
						echo "<p>".$_POST["lastName"]."</p>";
					}
				?>
			</div>
			<div>
				<?php
					if (strlen($_POST["address"]) < 5) {
						echo "<p style=\"color: red;\">".$_POST["address"]."</p>";
					} else {
						echo "<p>".$_POST["address"]."</p>";
					}
				?>
			</div>
			<div>
				<?php
					if (strlen($_POST["city"]) < 5) {
						echo "<p style=\"color: red;\">".$_POST["city"]."</p>";
					} else {
						echo "<p>".$_POST["city"]."</p>";
					}
				?>
			</div>
			<div>
				<?php
					if (strlen($_POST["province"]) < 5) {
						echo "<p style=\"color: red;\">".$_POST["province"]."</p>";
					} else {
						echo "<p>".$_POST["province"]."</p>";
					}
				?>
			</div>
			<div>
				<?php
					if (strlen($_POST["postalCode"]) < 5) {
						echo "<p style=\"color: red;\">".$_POST["postalCode"]."</p>";
					} else {
						echo "<p>".$_POST["postalCode"]."</p>";
					}
				?>
			</div>
			<div>
				<?php
					if (strlen($_POST["mobile"]) < 5) {
						echo "<p style=\"color: red;\">".$_POST["mobile"]."</p>";
					} else {
						echo "<p>".$_POST["mobile"]."</p>";
					}
				?>
			</div>
		</div>
  	</body>

</html>
