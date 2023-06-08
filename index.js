const carrusel = document.querySelector(".carruseles"),
      sliderSection= document.querySelectorAll(".slider-section"),
      btnRight= document. querySelector(".right"),
      btnLeft= document. querySelector(".left");


btnLeft.addEventListener("click", (e)=> moveToLeft())
btnRight.addEventListener("click", (e)=>moveToRight())

let operacion =0;
contadorImg=0;
widthImage= 100/ sliderSection.length;

function moveToRight(){
    if(contadorImg >= sliderSection.length-1){
        contadorImg=0;
        operacion=0;
return
    }
    contadorImg++;
    operacion=operacion+ widthImage;
    carrusel.style.transform= `translate(-${operacion}%)`
}

function moveToLeft(){
    contadorImg--;
    if(contadorImg<0){
        contadorImg=sliderSection.length-1;
        operacion=widthImage*(sliderSection.length-1)
        console.log(operacion)
        carrusel.style.transform= `translate(-${operacion}%)`

    }
    operacion=operacion - widthImage;
    carrusel.style.transform= `translate(-${operacion}%)`
}