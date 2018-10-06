

<?php

	$servername="localhost";
	$username = "nikki";
	$password = "Hn235frYHeP6QDWV";
	
	$link = mysqli_connect($servername, $username,$password,"login");
	if(!$link){
		die("couldnt connect: ".mysqli_error());
	}
	extract ($_GET);

	$sql = "SELECT * FROM details WHERE name = '$uname'";
	$retval = mysqli_query($link,$sql);
	
	if (mysqli_num_rows($retval) > 0)
	{
	while($row = mysqli_fetch_assoc($retval))
	{
		
	
		if($row["password"]==$pwd) 
		{
			$msg = "Login successful";
			$logged_in = 1;	
		}	
		else {
		echo "<script>setTimeout(\"location.href = 'index.html';\",1500);</script>";		 
		
			$msg = 'User name or password incorrect. Try Again! '; 
			$logged_in = 2;
		}
	
	}
	}
		else{
			$msg = "User id does not exist";
			 $logged_in =0;		
		}
		
	if($logged_in==1)
	{	
		
    echo "<script>setTimeout(\"location.href = 'Homepage.html';\",1500);</script>";
			
	}
	else if($logged_in==0)
	{
		
		
		echo"<script> window.confirm('User does not exist. Do you want to create a new account? ');</script>";
		
			$sql = "INSERT INTO details (name,password) VALUES ('$uname','$pwd')";
			$result = mysqli_query($link,$sql);
			if ($result)
			{
				echo "<script>setTimeout(\"location.href = 'Homepage.html';\",1500);</script>";
				$msg = "<br/>New account created <br/>Login Successful<br/>";
				$logged_in=1;
			
			}
		
	}		
	print($msg);
	mysqli_close($link);
	
?>

<html>
<head></head>
<body></body>
</html>