<?php
// Vérifier si la requête est de type POST
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Récupérer les données du formulaire
    $nom = $_POST['name'] ?? 'Non spécifié';  // Remplacer 'nom' par le nom de votre champ correspondant
    $email = $_POST['email'] ?? 'Non spécifié';  // Idem pour email
    $message = $_POST['freeform'] ?? 'Non spécifié';  // Idem pour message

    // Spécifier à qui envoyer le message
    $to = 'lionel@alloa.ch, alexis@larentreedesreseauteurs.ch'; 

    // Créer le sujet du message
    $subject = 'Nouveau message de votre site internet';

    // Construire le corps du message
    $body = "Vous avez reçu un nouveau message de votre site web:\n\n" .
            "Nom: $nom\n" .
            "Email: $email\n" .
            "Message: $message";

    // Définir les en-têtes
    $headers = 'From: webmaster@larentreedesreseauteurs.ch' . "\r\n" .
               'Reply-To: webmaster@larentreedesreseauteurs.ch' . "\r\n" .
               'MIME-Version: 1.0' . "\r\n" .
               'Content-type: text/plain; charset=UTF-8' . "\r\n" .
               'X-Mailer: PHP/' . phpversion();

    // Envoyer l'email
    if (mail($to, $subject, $body, $headers)) {
        echo 'Votre message a été envoyé avec succès.';
    } else {
        echo 'Erreur lors de l\'envoi de l\'email.';
    }
} else {
    // Ne pas accepter les requêtes qui ne sont pas de type POST
    echo 'Méthode non autorisée';
}
?>
