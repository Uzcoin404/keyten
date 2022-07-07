const menuBtn = document.querySelector('.menu_btn');
const mobileMenu = document.querySelector('.mobile_menu');
const closeModal = document.querySelector('.modal_back_btn');
const contactForm = document.querySelector('.contact_form');
const modal = document.querySelector('.sendedMessage');

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
contactForm.addEventListener('submit', function(e) {
    e.preventDefault();
    modal.classList.add('open');
});
closeModal.addEventListener('click', function() {
    modal.classList.remove('open');
});