/*
V1

var originalTitle = 'Hello!';
var newTitle = 'Anthony';
var isOriginal = true;

document.getElementById('clickable-title').addEventListener('click', function() {
    var title = this;
    title.innerHTML = ''; // Efface le titre

    var name = isOriginal ? newTitle : originalTitle;
    var i = 0;

    function typeWriter() {
        if (i < name.length) {
            title.innerHTML += name.charAt(i);
            i++;
            setTimeout(typeWriter, 150); // Ajustez la vitesse de frappe ici
        } else {
            isOriginal = !isOriginal;
        }
    }

    typeWriter();
});

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

//Carousel projets
let currentIndex = 0;

function moveCarousel(direction) {
    const carousel = document.querySelector('.carousel');
    const items = document.querySelectorAll('.carousel-item');
    const totalItems = items.length;
    const itemsToShow = 3;

    currentIndex += direction;

    if (currentIndex < 0) {
        currentIndex = 0;
    } else if (currentIndex >= totalItems - itemsToShow + 1) {
        currentIndex = totalItems - itemsToShow;
    }

    const offset = -currentIndex * (100 / itemsToShow);
    carousel.style.transform = `translateX(${offset}%)`;
}

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
*/
