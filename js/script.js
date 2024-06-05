window.addEventListener('load', function() {
    if (window.innerWidth <= 768) {
        document.querySelector('.element_nav').classList.add('element-nav_hidden');
    }
});

window.addEventListener('scroll', function() {
    var headerHeight = document.querySelector('nav').offsetHeight;
    if (window.scrollY > headerHeight) {
        document.querySelector('.element_nav').classList.add('element-nav_hidden');
    } else {
        document.querySelector('.element_nav').classList.remove('element-nav_hidden');
    }
});

document.querySelector('.menu-icon').addEventListener('click', function() {
    var nav = document.querySelector('.element_nav');
    if (nav.classList.contains('element-nav_hidden')) {
        nav.classList.remove('element-nav_hidden');
    } else {
        nav.classList.toggle('element-nav_hidden');
    }
});

window.addEventListener('scroll', function() {
    var headerHeight = document.querySelector('nav').offsetHeight;
    if (window.scrollY > headerHeight) {
        document.querySelector('.element_nav').classList.add('element-nav_hidden');
    } else {
        document.querySelector('.element_nav').classList.remove('element-nav_hidden');
    }
});

// Fonction pour ouvrir une page modale
function openModal(pageId) {
    var modal = document.getElementById(pageId);
    modal.style.display = "block";
}

// Fonction pour fermer une page modale
function closeModal(pageId) {
    var modal = document.getElementById(pageId);
    modal.style.display = "none";
}

// Ajouter un écouteur d'événement à toutes les div avec la classe openPageButton
var divs = document.querySelectorAll('.openPage');
divs.forEach(function(div) {
    div.addEventListener('click', function() {
        var targetPageId = this.getAttribute('data-target');
        openModal(targetPageId);
    });
});


// Cacher la page si l'utilisateur clique en dehors de la boîte modale
window.addEventListener('click', function(event) {
    var modals = document.querySelectorAll('.modal');
    modals.forEach(function(modal) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    });
});
