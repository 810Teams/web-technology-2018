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
				<?php
					$data = array("National ID"=>$_POST["nationalId"], 
						"First Name"=>$_POST["firstName"],
						"Last Name"=>$_POST["lastName"],
						"Address"=>$_POST["address"],
						"City"=>$_POST["city"],
						"Province"=>$_POST["province"],
						"Postal Code"=>$_POST["postalCode"],
						"Mobile"=>$_POST["mobile"]);
					
					foreach($data as $key => $value) {
						echo $key." : ".$value."<br>";
					}
				?>
			</div>
  	</body>

</html>
