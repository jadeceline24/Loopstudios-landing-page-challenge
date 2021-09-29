
const img = document.querySelector(".menu-burger")
const nav = document.querySelector (".nav__toogle");
const menu = document.querySelector('.nav__menu');
nav.addEventListener('click', ()=>{
    let isToggle = img.classList.toggle("active");
    img.src = isToggle ? "./images/icon-close.svg" : "./images/icon-hamburger.svg";
    if(img.classList.contains("active")){
        menu.classList.add('show-menu')
    }
    else{
        menu.classList.remove('show-menu')
    }
    
}
   )
   
