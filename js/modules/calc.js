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


export {calc};