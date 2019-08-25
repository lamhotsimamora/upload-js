<?php 

// Try to receive files...

if (isset($_FILES))
{
	var_dump($_FILES);
}else{
	echo 'Nothing...';
}