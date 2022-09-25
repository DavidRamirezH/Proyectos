let cambio = document.querySelector('.planeta');
let general =document.querySelector('.container');
let mostrar=document.querySelector('.sistema_solar');


cambio.addEventListener('click',()=>{
    general.classList.add('esconder')
    mostrar.classList.add('mostrar')
    mostrar.classList.add('alejar');
});

