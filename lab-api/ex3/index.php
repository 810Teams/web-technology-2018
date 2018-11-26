<!DOCTYPE html>

<html>

	<head>
		<meta charset="utf-8">
		<meta http-equiv="X-UA-Compatible" content="IE=edge">
		<title>Currency Converter</title>
		<meta name="viewport" content="width=device-width, initial-scale=1">
	</head>

	<body>
		<form action="" method="POST">
			<input type="text" name="amount" placeholder="Enter money amount" required/>
		
			<select name="initial_currency">
				<option value="THB">THB</option>
				<option value="JPY">JPY</option>
				<option value="CNY">CNY</option>
				<option value="SGD">SGD</option>
				<option value="USD">USD</option>
			</select>

			<i> to </i>

			<select name="target_currency">
				<option value="THB">THB</option>
				<option value="JPY">JPY</option>
				<option value="CNY">CNY</option>
				<option value="SGD">SGD</option>
				<option value="USD">USD</option>
			</select>

			<button type="submit" name="submit">Convert</button>
		</form>

		<?php
			// THB, JPY, CNY, SGD, USD
			if (isset($_POST["amount"])) {
				$amount = $_POST["amount"];	// Amount
				$init = $_POST["initial_currency"]; // Initital Currency
				$target = $_POST["target_currency"]; // Target Currency
				$convert = $init."_".$target; // Conversion Format

				$client = curl_init("http://free.currencyconverterapi.com/api/v6/convert?q=".$convert."&compact=y");
				curl_setopt($client, CURLOPT_RETURNTRANSFER, true);
				$result = json_decode(curl_exec($client), false);
				
				$answer = $amount * $result->$convert->val; // Answer
				
				echo "<br>";
				echo $amount." ".$init." = ".$answer." ".$target;
			}
		?>

	</body>

</html>