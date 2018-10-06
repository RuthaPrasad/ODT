<?php

$upload_dir = "upload/";
//Get the base-64 string from data
$filteredData=substr($_POST['img_val'], strpos($_POST['img_val'], ",")+1);

//Decode the string
$unencodedData=base64_decode($filteredData);
$file = $upload_dir . mktime() . ".png";
//Save the image
file_put_contents($file, $unencodedData);
?>

<link rel="stylesheet" type="text/css" href="stylesheet.css">
<h2 style="color:snow"><center>Image saved! This is how it looks like.</center></h2>

            <a href="Homepage.html" style="float:left; color:lightblue"><h2><u>Homepage</u></h2></a>
            
<?php
//Show the image
echo '<img src="'.$_POST['img_val'].'" />';
?>
