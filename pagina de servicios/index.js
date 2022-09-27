
//menu desplegable//
let listElements = document.querySelectorAll('.abrir');

listElements.forEach(listElement => {
    listElement.addEventListener('click', ()=>{
        
        listElement.classList.toggle('arrow');

        let height = 0;
        let menu = listElement.nextElementSibling;
        if(menu.clientHeight == "0"){
            height=menu.scrollHeight;
        }

        menu.style.height = `${height}px`;

    })
});
window.addEventListener("scroll",function(){
    let header =document.querySelector("header");
    header.classList.toggle("menu_fijo",window.scrollY>0);
    header.classList.toggle("desplazar_menu", window.scrollY>0)
});

// scroll//
window.onload = () =>{
    let links=document.querySelectorAll('.link')

    let primero= links[0]
    primero.addEventListener('click', () =>{
            scrollsuave('#hola', 900, 800)
        })
    let segundo= links[1]
    segundo.addEventListener('click', () =>{
            scrollsuave('#sobre', 900, 120)
    })
    let tercero= links[2]
        tercero.addEventListener('click', () =>{
            scrollsuave('#servicios', 900, 120)
    })
    let Cuarto= links[3]
    Cuarto.addEventListener('click', () =>{
        scrollsuave('#precios', 900, 120)
  })
    let Quinto= links[4]
    Quinto.addEventListener('click', () =>{
        scrollsuave('#contactar', 900, 120)
    })
    let sexto= links[5]
    sexto.addEventListener('click', () =>{
    scrollsuave('#contactarlink', 900, 120)
    })
}

const scrollsuave=(objetivo,duracion, compensacion)=>{
    let elemObj = document.querySelector(objetivo)
    let elemPos = elemObj.getBoundingClientRect().top - compensacion
    let posInicial = window.pageYOffset
    let tiempoInicial = null

    const animacion = tiempoAhora=>{
        if (tiempoInicial===null) tiempoInicial=tiempoAhora
        let tiempoPasado = tiempoAhora -tiempoInicial
        let auxAnimacion =  easeInOutQuad(tiempoPasado, posInicial, elemPos, duracion)
        window.scrollTo(0, auxAnimacion)
        if (tiempoPasado < duracion) requestAnimationFrame(animacion)
    }
    requestAnimationFrame(animacion)
}
const easeInOutQuad = (t, b, c, d) => {
    t /= d / 2
    if (t < 1) return c / 2 * t * t + b
    t--
    return - c / 2 * (t * (t - 2) - 1) + b
}

// cookies//
const botonAceptarCookies = document.getElementById('btn_aceptar_cookies');
const avisoCookies = document.getElementById('aviso_cookies');
const fondoAvisoCookies = document.getElementById('fondo_aviso_cookies');

dataLayer=[];

if(!localStorage.getItem('cookies-aceptadas')){
    avisoCookies.classList.add('activo');
    fondoAvisoCookies.classList.add('activo')
}


botonAceptarCookies.addEventListener('click', ()=>{
    avisoCookies.classList.remove('activo');
    fondoAvisoCookies.classList.remove('activo');
    

    localStorage.setItem('cookies-aceptadas', true);

    dataLayer.push({'event': 'cookies-aceptadas'})
})


// menu//
let activar=document.getElementById('btn-menu')
let menu= document.getElementById('listado')

activar.addEventListener('click', ()=>{

    menu.classList.toggle('activado')
});

var $yoyo= window.url.hash.substring(0);

