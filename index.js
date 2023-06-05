const carrusel = document.querySelector(".carruseles"),
      sliderSection= document.querySelectorAll(".slider-section"),
      btnRight= document. querySelector(".right"),
      btnLeft= document. querySelector(".left");


btnLeft.addEventListener("click", (e)=> moveToLeft())
btnRight.addEventListener("click", (e)=>moveToRight())

let operacion =0;

function moveToRight(){
    operacion=operacion+33.3;
    carrusel.style.transform= `translate(-${operacion}%)`
}