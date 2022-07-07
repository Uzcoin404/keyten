const menuBtn = document.querySelector('.menu_btn');
const mobileMenu = document.querySelector('.mobile_menu');

menuBtn.addEventListener('click', function() {
    mobileMenu.classList.toggle('active');
    if (mobileMenu.classList.contains('active')) {
        this.src = "img/close.svg";
        document.body.style.overflow = 'hidden';
    } else {
        this.src = "img/menu.svg";
        document.body.style.overflow = 'auto';
    }
});