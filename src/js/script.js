"use strict";

document.addEventListener("DOMContentLoaded", () => {
    const modal = document.querySelector('.modal')
    const btnmodal = document.querySelector('#sumModal');
    btnmodal.addEventListener('click', ()=>{
        modal.classList.remove('hide');
        modal.classList.add('show');
        document.body.style.overflow = 'hidden';
    })
    
    modal.addEventListener('click', (e) => {
        if (e.target === document.querySelector('.modal__bg') ||  e.target.getAttribute('data-close') == '') {
            hideModal();
        }
    })

    function hideModal() {
        modal.classList.remove('show');
        modal.classList.add('hide');
        document.body.style.overflow = '';
    }
  });