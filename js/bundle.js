/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./js/modules/calc.js":
/*!****************************!*\
  !*** ./js/modules/calc.js ***!
  \****************************/
/***/ ((module) => {

function calc() {

    let ratio = {
        age: 5,
        complexity: 10,
        learnability: 5,
        independence: 10,
    };


    clickItem('age');
    clickItem('complexity');
    clickItem('learnability');
    clickItem('independence');
    sumRatio();

    
    
    
    function clickItem(id) {
        const block = document.querySelectorAll(`#${id} div`)
        block.forEach((item) => {
            item.addEventListener('click', (e) => {
                console.log(e.target);
                block.forEach((i) => {
                    i.classList.remove('calc__block-item__active');
                })
                e.target.classList.add('calc__block-item__active');
                ratio[id] = 0;
                ratio[id] += +e.target.getAttribute('data-ratio');
                console.log(ratio);
                sumRatio()
                console.log(sumRatio());
                calcResultDog();
            })
            
        })
        
    }

    function sumRatio() {
        let sum = 0;
        Object.values(ratio).forEach((i) => sum += +i);
        return sum;
    }

    function calcResultDog() {
        const res = document.querySelector('.calc__result-item');
        if (sumRatio() > 25) {
            res.textContent = 'Английский кокер-спаниель, ретривер';
        } else if (sumRatio() > 15) {
            res.textContent = 'Бордер-колли, Австралийская овчарка';
        } else {
            res.textContent = 'Кавалер кинг-чарльз-спаниель, Мопс';
        }
    }
    
}


module.exports = calc;

/***/ }),

/***/ "./js/modules/main.js":
/*!****************************!*\
  !*** ./js/modules/main.js ***!
  \****************************/
/***/ ((module) => {

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

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be in strict mode.
(() => {
"use strict";
/*!**********************!*\
  !*** ./js/script.js ***!
  \**********************/


document.addEventListener("DOMContentLoaded", () => {
    const main = __webpack_require__(/*! ./modules/main */ "./js/modules/main.js"),
    calc = __webpack_require__(/*! ./modules/calc */ "./js/modules/calc.js");
    main();
    calc();




    // const forms = document.querySelectorAll('form');
    // forms.forEach(form => {
    //     form.addEventListener('submit', (e) => {
    //         e.preventDefault();
    //         let formData = new FormData(form);
    //         const json = JSON.stringify(Object.fromEntries(formData));
    //         console.log(json);
    //         ajaxSend(json, 'http://localhost:3000/requests').then(response => console.log(response))
    //         .catch(error => console.error(error))
    //         .finally(() => form.reset());
    //     });







    //     const ajaxSend = async (formData, url) => {
    //         const res = await fetch(url, {
    //             method: "POST",
    //             headers: {
    //                 'Content-Type': 'application/json',
    //             },
    //             body: formData
    //         });
    //         return await res.json();

    //     };


    // });


  });
})();

/******/ })()
;
//# sourceMappingURL=bundle.js.map