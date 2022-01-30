
const navToggle = document.querySelector('.nav-toggle')
const navMenu = document.querySelector('.nav-menu')
const creativeText = document.querySelector('.creatives')
const arrowDown =document.querySelector('.arrow-down')


navToggle.addEventListener('click', ()=>{
    //toggle-menu
    navMenu.classList.toggle("show-nav")

    //to hide creative title and arrow-down icon
    if(navMenu.classList.contains('show-nav')){
        creativeText.style.display = 'none';
        arrowDown.style.display = 'none';
    } else {
        creativeText.style.display = 'block';
        arrowDown.style.display = 'block';
    }
    
})