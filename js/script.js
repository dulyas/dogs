"use strict";
import {main} from './modules/main';
import {calc} from './modules/calc';
import {nav} from './modules/nav';

document.addEventListener("DOMContentLoaded", () => {
    main();
    calc();
    nav();




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