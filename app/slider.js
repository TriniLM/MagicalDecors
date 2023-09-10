var imagenUno = 'https://res.cloudinary.com/dclgwdu77/image/upload/v1693063981/alurageek/IMG_0149-1_phfsjd.jpg';
var imagenDos = 'https://res.cloudinary.com/dclgwdu77/image/upload/v1693022339/alurageek/IMG_0530_dz7fnb.jpg';
var imagenTres ='https://res.cloudinary.com/dclgwdu77/image/upload/v1693019445/alurageek/IMG_0217-1_lkhnng.jpg'
var imagenCuatro = 'https://res.cloudinary.com/dclgwdu77/image/upload/v1693077595/IMG_1914_areg7e.jpg'
var imagenCinco = 'https://res.cloudinary.com/dclgwdu77/image/upload/v1693077586/IMG_1940_gjs74q.jpg'



var lista = [imagenCinco,imagenTres,imagenUno,imagenCuatro,imagenDos]
var num = 0;

function crearImagen (){
   let img = document.createElement('img');
   img.src = lista[num]
   img.classList.add('slider__img')
   var slider = document.getElementById('slider');
   var hijo = slider.firstChild;
   if(hijo){
    slider.removeChild(hijo)
   }

   if(num > lista.length - 2){
    num = 0
}
else{
    num++
}

      return slider.appendChild(img)
}



setInterval(crearImagen,5000);

var nav = document.getElementById('nav');
var btn = document.getElementById('btn');
btn.addEventListener("click", ()=>{
    nav.classList.toggle('nav_activo')
})