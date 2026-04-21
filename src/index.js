import { homePage } from './home.js';
import { menuPage } from './menu.js';
import {contactPage} from './contact.js';

homePage();
const nav = document.querySelector("nav");

nav.addEventListener('click',(e)=>{
    if(e.target.id == 'home'){
        homePage();
    }
    if(e.target.id == 'menu'){
        menuPage();
    }
    if(e.target.id == 'contact'){
        contactPage();
    }
})