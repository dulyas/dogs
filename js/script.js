"use strict";

document.addEventListener("DOMContentLoaded", () => {
    const modal = document.querySelector('.modal')
    const btnmodal = document.querySelector('#sumModal');
    btnmodal.addEventListener('click', (e)=>{
        e.preventDefault();
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

    document.querySelectorAll('.block').forEach((item) =>{
        item.addEventListener('click', (e) => {
            e.target.classList.add('animate__fadeOutRight');
            e.target.classList.add('animate__animated');
            setTimeout(()=>{
                e.target.classList.remove('animate__fadeOutRight');
                e.target.classList.remove('animate__animated');
            }, 5000)
        })
    }
    )


    const slider = document.querySelector('.slider__flexwrap'),
          next = document.querySelector('#next'),
          prev = document.querySelector('#prev'),
          width = window.getComputedStyle(slider).width,
          widthNum = +width.slice(0, -2),
          slides = document.querySelectorAll('.slide'),
          maxSlide = document.querySelector('#maxSlide'),
          currentSlide = document.querySelector('#currentSlide');
    let slideIndex = 1,
        offset = 0;

        if (slides.length < 10) {
            maxSlide.textContent = `/0${slides.length}`;
        } else {
            maxSlide.textContent = `/${slides.length}`;
        };
          console.log(width);
          slides.forEach(slide => {
              slide.style.width = width;
            }
            );

        slider.style.width = 100 * slides.length + '%'; 
        next.addEventListener('click', () => {
            if (offset == (slides.length-1) * widthNum) {
                offset = 0 - widthNum;
                slideIndex = 0;
            }
            if (offset == 0) {
                offset = widthNum;
            } else {
                offset += widthNum;
            }
        slideIndex++;
        if (slideIndex < 10) {
            currentSlide.textContent = `0${slideIndex}`;
        } else {
            maxSlide.textContent = `${slideIndex}`;
        };
        slider.style.transform = `translateX(-${offset}px)`;
    });
        prev.addEventListener('click', () => {
            if (offset == 0) {
                offset = ((slides.length-1) * widthNum);
                slideIndex = 5;
            } else {
                offset -= widthNum;
            }
            slideIndex--;
        if (slideIndex < 10) {
            currentSlide.textContent = `0${slideIndex}`;
        } else {
            maxSlide.textContent = `${slideIndex}`;
        };            
        slider.style.transform = `translateX(-${offset}px)`;
    });    



    const forms = document.querySelectorAll('form');
    forms.forEach(form => {
        form.addEventListener('submit', (e) => {
            e.preventDefault();
            let formData = new FormData(form);
            const json = JSON.stringify(Object.fromEntries(formData));
            console.log(json);
            ajaxSend(json, 'http://localhost:3000/requests').then(response => console.log(response))
            .catch(error => console.error(error))
            .finally(() => form.reset());;
        });







        const ajaxSend = async (formData, url) => {
            const res = await fetch(url, {
                method: "POST",
                headers: {
                    'Content-Type': 'application/json',
                },
                body: formData
            });
            return await res.json();

        };


    });


  });