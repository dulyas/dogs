function main() {
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


    const dotsWrap = document.querySelector('.dots');
    
    const slider = document.querySelector('.slider__flexwrap'),
          next = document.querySelector('#next'),
          prev = document.querySelector('#prev'),
          width = window.getComputedStyle(slider).width,
          widthNum = +width.replace(/\D/g, ''),
          slides = document.querySelectorAll('.slide'),
          maxSlide = document.querySelector('#maxSlide'),
          currentSlide = document.querySelector('#currentSlide');
    let slideIndex = 1,
        offset = 0;
    for (let i = 0; i < slides.length; i++) {
        const dots = document.createElement('li');
        dotsWrap.append(dots);
        dots.classList.add('dot');
    }
    const dotsList = document.querySelectorAll('.dot');
    dotsList[0].classList.add('activeDot');
    dotsList.forEach((dot,i) =>{
        dot.addEventListener('click', (e) => {
            dotsList.forEach(dot=>dot.classList.remove('activeDot'));
            e.target.classList.add('activeDot');
            if (i+1 == slides.length) {
                offset = i * widthNum;
                slideIndex = slides.length;
                pushSlideIndex();
                slider.style.transform = `translateX(-${offset}px)`;
            } else if (i == 0) {
                offset = 0;
                slideIndex = 1;
                pushSlideIndex();
                slider.style.transform = `translateX(-${offset}px)`;
            } else {
                offset = i * widthNum;
                slideIndex = i+1;
                pushSlideIndex();
                slider.style.transform = `translateX(-${offset}px)`;
            }



        })
    })


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
            nextClick();
            dotsList.forEach((dot)=> {
                dot.classList.remove('activeDot');
            });
            dotsList[slideIndex-1].classList.add('activeDot');
    });
        prev.addEventListener('click', () => {
            prevClick();
            dotsList.forEach(dot=> {
                dot.classList.remove('activeDot');
                dotsList[slideIndex-1].classList.add('activeDot');

        });
    });    

    function prevClick() {
        if (slideIndex == 1) {
            offset = ((slides.length-1) * widthNum);
            slideIndex = slides.length+1;
        } else {
            offset -= widthNum;
        }
        slideIndex--;
        pushSlideIndex();
        slider.style.transform = `translateX(-${offset}px)`;
    };            

    

    function nextClick() {
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
    }

    function pushSlideIndex() {
        if (slideIndex < 10) {
            currentSlide.textContent = `0${slideIndex}`;
        } else {
            currentSlide.textContent = `${slideIndex}`;
        };
    }

}

module.exports = main;