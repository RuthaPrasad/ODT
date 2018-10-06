<?php
 
if(isset($_POST['email'])) {
 
     
 
    // EDIT THE 2 LINES BELOW AS REQUIRED
 
    $email_to = "nikitharao1019@gmail.com";
 
    $email_subject = "Techie Doodles Feedback";
 
     
 
     
 
    function died($error) {
 
        // your error code can go here
 
        echo "We are very sorry, but there were error(s) found with the form you submitted. ";
 
        echo "These errors appear below.<br /><br />";
 
        echo $error."<br /><br />";
 
        echo "Please go back and fix these errors.<br /><br />";
 
        die();
 
    }
 
     
 
    // validation expected data exists
 
    if(!isset($_POST['fname']) ||
 
        !isset($_POST['num']) ||
 
        !isset($_POST['email']) ||
 
        !isset($_POST['rating']) ||
		
		!isset($_POST['best']) ||
		
		!isset($_POST['problems']) ||
 
        !isset($_POST['comments'])) {
 
        died('We are sorry, but there appears to be a problem with the form you submitted.');       
 
    }
 
     
 
    $fname = $_POST['fname']; // required
 
    $num = $_POST['num']; // required
 
    $email_from = $_POST['email']; // required
 
    $rating = $_POST['rating']; // not required
	$best = $_POST['best'];
	$problems = $_POST['problems'];
    $comments = $_POST['comments']; // required
 
     
 
    $error_message = "";
 
    $email_exp = '/^[A-Za-z0-9._%-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,4}$/';
 
  if(!preg_match($email_exp,$email_from)) {
 
    $error_message .= 'The Email Address you entered does not appear to be valid.<br />';
 
  }
 
    $string_exp = "/^[A-Za-z .'-]+$/";
 
  if(!preg_match($string_exp,$fname)) {
 
    $error_message .= 'The name you entered does not appear to be valid.<br />';
 
  }

	
    $num_exp = "/^[0-9 .]+$/";
 
  if(!preg_match($string_exp,$fname)) {
 
    $error_message .= 'The rating you entered does not appear to be valid.<br />';
 
  }

  if(strlen($comments) < 2) {
 
    $error_message .= 'The Comments you entered do not appear to be valid.<br />';
 
  }
 
  if(strlen($error_message) > 0) {
 
    died($error_message);
 
  }
 
    $email_message = "Form details below.\n\n";
 
     
 
    function clean_string($string) {
 
      $bad = array("content-type","bcc:","to:","cc:","href");
 
      return str_replace($bad,"",$string);
 
    }
 
     
 
    $email_message .= "Name: ".clean_string($fname)."\n";
 
    $email_message .= "Contact Number: ".clean_string($num)."\n";
 
    $email_message .= "Email: ".clean_string($email_from)."\n";
 
    $email_message .= "Rating: ".clean_string($rating)."\n";
	
	$email_message .= "Best thing: ".clean_string($best)."\n";
 
	$email_message .= "Problems: ".clean_string($problems)."\n";
 
    $email_message .= "Comments: ".clean_string($comments)."\n";
 
     
 
     
 
// create email headers
 
$headers = 'From: '.$email_from."\r\n".
 
'Reply-To: '.$email_from."\r\n" .
 
'X-Mailer: PHP/' . phpversion();
 
@mail($email_to, $email_subject, $email_message, $headers);  
 
?>
 
 <html>
<head>
<style>
form {
	float:left;
	border: 3px solid #f1f1f1;
	margin:5px;
	width:80%;
}

img.logo{
	border:5px solid white;
	position:absolute;
	width:150px;
	height:150px;
	float:right;
	right:50px;
	transition:all 2s;
	top:20px;	
	position:absolute;
}
img.logo:hover{-webkit-transform: rotate(360deg);}	


img.name{
	border:5px;
	width:100%;
	height:100%;
	float:right;
	right:50px;
	width:150px;
	height:300px;
	top:200px;
	position:absolute;
}
body	{
	background-image:url("img/bg2.jpg");
	background-size:100%;
	background-repeat:no repeat;
}
button {
    background-color: #4CAF50;
    color: white;
    padding: 14px 20px;
    margin:10px;
    border: none;
    cursor: pointer;
    width: 100px;
float:right;
font-size:15px;}

.cancelbtn {
    width:100px;
    padding:14px;
    margin:10px;
    background-color: #f44336;
float:right;
font-size:15px;}

.imgcontainer {
    text-align: center;
    margin: 10px 0 10px 0;
}

img.avatar {
    align: center;
width: 50%;
    padding:20px;
border-radius:100%;
}


</style>
</head>


<body>
<form>
  <div class="imgcontainer">
  <a href="Homepage.html"><img src="img/feedback.jpg" alt="Feedback" class="avatar"></a>
  </div>

<h1 style="font-size:50px;font-family:Courier;text-align:center;color:snow;"><i>Thank You for the Feedback :)<br/></i></h1>

    
<a href="Homepage.html"><button type="button" class="cancelbtn">Home</button></a>
    
 


</form>
<img class = "logo" src = "logoo.png" >

<div id="sidebar">
	<img class = "name" src = "name.png" >
	
</div>

</body>

</html> 
 
 
 
 
<?php
 
}
 
?>