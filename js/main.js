const navMobile = document.querySelector('.nav-mobile');
const footerMobile = document.querySelector('.footer__bottom-text');
const navBtn = document.querySelector('.hamburger');
const footerYear = document.querySelector('.footer__year');

const handleNav = () =>{
    navBtn.classList.toggle('is-active')
    navMobile.classList.toggle('nav-mobile--active')
    footerMobile.classList.toggle('footer__bottom-text--active')
}

navBtn.addEventListener('click', handleNav)






// Curent Year 
const handleCuttentYear = () =>{
    const year = (new Date).getFullYear();
    footerYear.innerText=year;
}

handleCuttentYear();