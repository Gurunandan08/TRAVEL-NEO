<?php
// Connect to MySQL
$servername = "localhost";
$username = "root";
$password = "";
$dbname = "register1";

$conn = new mysqli($servername, $username, $password, $dbname);

// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

// Retrieve registration data from POST
$username = $_POST["username"];
$phoneno= $_POST["phoneno"];
$email = $_POST["email"];
$review = $_POST["review"];


// Insert registration data into the database
$sql = "INSERT INTO users (username,phoneno,email,review) VALUES ('$username','$phoneno', '$email', '$review')";

if ($conn->query($sql) === TRUE) {
    echo "<h1>We appreciate your interest and will get back to you shortly.</h1>";
} else {
    echo "Error: " . $sql . "<br>" . $conn->error;
}

$conn->close();
?>