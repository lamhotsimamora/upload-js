<?php 

// Try to receive files...

if (isset($_FILES))
{
	var_dump($_FILES);
	var_dump($_POST);
}else{
	echo 'Nothing...';
}