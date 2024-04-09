<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Récupérer les données du formulaire
    $nom = $_POST['nom'];
    $email = $_POST['email'];
    $objet = $_POST['objet'];
    $message = $_POST['message'];

    // Créer l'e-mail
    $to = 'skrant44@gmail.com'; // Remplacez par votre adresse e-mail
    $subject = 'Nouveau message de ' . $nom . ': ' . $objet;
    $headers = 'From: ' . $email;

    // Envoyer l'e-mail
    if (mail($to, $subject, $message, $headers)) {
        echo "Message envoyé avec succès.";
    } else {
        echo "Erreur lors de l'envoi du message.";
    }
}
?>