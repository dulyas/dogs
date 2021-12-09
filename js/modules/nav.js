function nav() {
    const hamburger = document.querySelector('.hamburger'),
    menu = document.querySelector('.menu'),
    menuBg = document.querySelector('.menu-bg'),
    menuItem = document.querySelectorAll('.menu-item');
    hamburger.addEventListener('click', ()=>{
        toggleNav();
    })
    menuItem.forEach((item) => {
        item.addEventListener('click', ()=> {
            toggleNav();
        })
    })
    menuBg.addEventListener('click', ()=>{
        toggleNav();
    })

    function toggleNav() {
        hamburger.classList.toggle('hamburger__active');
        menu.classList.toggle('menu__active');
        menuBg.classList.toggle('menu-bg__active');
    }
};

export {nav};