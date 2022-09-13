let escribir=str=>{
    let listado = str.split('');
    let i=0;
    let textoListo= setInterval(function(){
        if(listado[i]===''){
            document.getElementById('texto').innerHTMl += listado[i];
            document.getElementById('texto').innerHTMl += listado[i+1];
            i+= 2;
        }else{
            document.getElementById('texto').innerHTML += listado[i];
            i++
        }
        
        if(i===listado.length){
            clearInterval(textoListo)
        }
    },70);
};

escribir('Implementación de librería Particle-JS');