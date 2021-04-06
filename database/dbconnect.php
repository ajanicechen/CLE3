<?php

$name = "localhost";
$username = "root";
$password = "";
$dbName = "show";
$conn = mysqli_connect($name, $username, $password, $dbName);

if (!$conn){
    echo "connection Failed";
    }
?>