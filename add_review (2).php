<?php
$servername = "localhost";
$username = "root";
$password = "";
$dbname = "travel_reviews";

$name = $_POST['name'];
$place = $_POST['place'];
$review = $_POST['review'];
$rating = $_POST['rating'];

$conn = new mysqli($servername, $username, $password, $dbname);

if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

$sql = "INSERT INTO reviews (name,place, review, rating) VALUES ('$name','$place', '$review', '$rating')";

if ($conn->query($sql) === TRUE) {
    echo "<h1>Thanks For Your Feedback! We appreciate your input and will take it into consideration</h1>";
} else {
    echo "Error: " . $sql . "<br>" . $conn->error;
}
$conn->close();
?>
