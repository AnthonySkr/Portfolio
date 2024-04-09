window.addEventListener('scroll', function() {
    var headerHeight = document.querySelector('header').offsetHeight;
    if (window.pageYOffset > headerHeight) {
        document.querySelector('.element_nav').classList.add('element-nav_hidden');
    } else {
        document.querySelector('.element_nav').classList.remove('element-nav_hidden');
    }
});

document.querySelector('.menu-icon').addEventListener('click', function() {
    document.querySelector('.element_nav').classList.toggle('element-nav_hidden');
});