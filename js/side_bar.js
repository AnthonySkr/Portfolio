document.addEventListener("DOMContentLoaded", function () {
   const links = document.querySelectorAll("nav a");

   function updateActiveLink() {
      links.forEach((link) => {
         if (link.href === window.location.href) {
            link.classList.add("active");
         } else {
            link.classList.remove("active");
         }
      });
   }

   updateActiveLink();

   links.forEach((link) => {
      link.addEventListener("click", function (event) {
         event.preventDefault();

         window.history.pushState({}, "", link.href);

         updateActiveLink();
      });
   });
});

document.addEventListener("DOMContentLoaded", function () {
   const terminalContact = document.querySelector(".terminal-contact");
   const terminalOutput = document.getElementById("terminal-output");
   const terminalClose = document.querySelector(".terminal-close");

   function showTerminal(info) {
      terminalOutput.textContent = "";
      terminalContact.style.display = "block";
      typeText(info);
   }
   function hideTerminal() {
      terminalContact.style.display = "none";
   }
   function typeText(text) {
      let index = 0;

      function type() {
         if (index < text.length) {
            terminalOutput.textContent += text.charAt(index);
            index++;
            setTimeout(type, 100);
         } else {
            blinkingCursor.style.display = "none";
         }
      }

      type();
   }

   document.getElementById("phone").addEventListener("click", function (event) {
      event.preventDefault();
      showTerminal(event.target.getAttribute("data-info"));
   });

   document.getElementById("mail").addEventListener("click", function (event) {
      event.preventDefault();
      showTerminal(event.target.getAttribute("data-info"));
   });

   terminalClose.addEventListener("click", hideTerminal);
});
