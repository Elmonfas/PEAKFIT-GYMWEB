let height = $(window).height()

ajustes_inciales()
function ajustes_inciales() {
    let body = document.getElementById('body')
    body.style.marginTop = height - 80 + "px"   

}

window.addEventListener('scroll', function(){
    let titulo = document.querySelector('h1')
    let principal = document.getElementById('principal')
    let img = document.getElementById('img')
    let value = window.scrollY;
    let pixels = value / 70
    console.log(value)
    principal.style.filter = "blur(" + pixels + "px)"
    principal.style.backgroundPosition = "center -" + pixels*30 + "px";

    // if (value >= 240){
    //     img.classList = "animate__animated animate__slideInUp"
    // }
})

const hamburguesa = document.querySelector('.bars__menu');
const linea1 = document.querySelector('.line1__bars-menu');
const linea2 = document.querySelector('.line2__bars-menu');
const linea3 = document.querySelector('.line3__bars-menu');
const navbar = document.querySelector('.navbar');
const title = document.getElementById('title')
let cont = 0;

function animateBars() {
    console.log('hola');
    linea1.classList.toggle('activeline1__bars-menu');
    linea2.classList.toggle('activeline2__bars-menu');
    linea3.classList.toggle('activeline3__bars-menu');

    if (cont === 0) {
        navbar.style.display = 'flex';
        navbar.style.animation = 'entrar 1s ease';
        linea1.style.background = 'black';
        linea2.style.background = 'black';
        linea3.style.background = 'black';
        navbar.style.transform = 'translateX(0px)'
        title.style.display = 'none'
        cont = 1;
    } else {
        navbar.style.animation = 'salir 1s ease';
        navbar.style.transform = 'translateX(1000px)'
        linea1.style.background = 'yellow';
        linea2.style.background = 'yellow';
        linea3.style.background = 'yellow';
        title.style.display = 'inherit'
        cont = 0;
    }
}

hamburguesa.addEventListener('click', animateBars);
