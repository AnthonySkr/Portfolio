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
