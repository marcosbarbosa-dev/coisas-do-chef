let navIcon = document.querySelector('#navIcon')
let nav = document.querySelector('#max-large')
let navList = document.querySelector('ul')

function navActive(){
    nav.classList.toggle('active')
    navIcon.classList.toggle('active')
    if(nav.classList == ('active')) {
        navIcon.src = 'assets/imagens/header/navClose.png'
    } else {
        navIcon.src = 'assets/imagens/header/nav.png' 
    }
}

navIcon.addEventListener('click', ()=> {
    navActive()
})
navList.addEventListener('click', ()=> {
    navActive()
})
