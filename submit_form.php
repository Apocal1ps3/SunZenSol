<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name = htmlspecialchars($_POST['name']);
    $email = htmlspecialchars($_POST['email']);
    $message = htmlspecialchars($_POST['message']);

    // Send an email or save the information in a database
    mail("contact@yourcompany.com", "New Contact Form Submission", "Name: $name\nEmail: $email\nMessage: $message");

    echo "Thank you for reaching out!";
}
?>