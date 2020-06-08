<?php
$servername = "localhost";
$databasename = "galgje_scores";
$username = "root";
$password = "";

$conn = new mysqli($servername, $username, $password, $databasename);

if ($conn->connect_error) {
 die("Connection failed: " . $conn->connect_error);
}
?>
