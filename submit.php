<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {

    $email = filter_var($_POST["email"], FILTER_SANITIZE_EMAIL);

    if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
        echo "Adresse e-mail invalide.";
        exit;
    }

    $to = "beti@swissadvert.com";
    $subject = "Nouvelle participation";
    $message = "Nouvel inscrit : " . $email;

    $headers = "From: no-reply@larentreedesreseauteurs.ch\r\n";
    $headers .= "Reply-To: " . $email . "\r\n";

    if (mail($to, $subject, $message, $headers)) {
        echo "✅ Email envoyé avec succès";
    } else {
        echo "❌ Erreur lors de l'envoi";
    }
}
?>