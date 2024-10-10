// Navigation latérale
document.addEventListener("DOMContentLoaded", function () {
   const links = document.querySelectorAll("nav a");

   // Fonction pour mettre à jour le lien actif
   function updateActiveLink() {
      links.forEach((link) => {
         if (link.href === window.location.href) {
            link.classList.add("active");
         } else {
            link.classList.remove("active");
         }
      });
   }

   // Mettre à jour le lien actif au chargement de la page
   updateActiveLink();

   // Ajouter un événement de clic à chaque lien de navigation
   links.forEach((link) => {
      link.addEventListener("click", function (event) {
         event.preventDefault();

         // Mettre à jour l'URL sans recharger la page
         window.history.pushState({}, "", link.href);

         // Mettre à jour le lien actif
         updateActiveLink();
      });
   });
});

// Terminal contact
document.addEventListener("DOMContentLoaded", function () {
   const terminalContact = document.querySelector(".terminal-contact");
   const terminalOutput = document.getElementById("terminal-output");
   const terminalClose = document.querySelector(".terminal-close");
   const terminalTitle = document.querySelector(".terminal-title");

   // Fonction pour afficher le terminal avec le texte donné
   function showTerminal(info, title) {
      terminalOutput.textContent = "";
      terminalTitle.textContent = title;
      terminalContact.style.display = "block";
      terminalContact.classList.add("show");

      typeText(info);
   }

   // Fonction pour cacher le terminal
   function hideTerminal() {
      terminalContact.style.display = "none";
      terminalContact.classList.remove("show");
   }

   // Fonction pour taper le texte lettre par lettre
   function typeText(text) {
      let index = 0;

      function type() {
         if (index < text.length) {
            terminalOutput.textContent += text.charAt(index);
            index++;
            setTimeout(type, 100);
         }
      }

      type();
   }

   // Ajouter un événement de clic au lien avec l'ID 'phone'
   document.getElementById("phone").addEventListener("click", function (event) {
      event.preventDefault();
      showTerminal(event.target.getAttribute("data-info"), "Téléphone");
   });

   // Ajouter un événement de clic au lien avec l'ID 'mail'
   document.getElementById("mail").addEventListener("click", function (event) {
      event.preventDefault();
      showTerminal(event.target.getAttribute("data-info"), "Email");
   });

   // Ajouter un événement de clic au bouton de fermeture du terminal
   terminalClose.addEventListener("click", hideTerminal);
});
