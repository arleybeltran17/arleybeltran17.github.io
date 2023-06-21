
//Modal Circulo(Area)
// Obtener la referencia a los elementos necesarios
let open = document.getElementById("areacirculo") 
let modal = document.getElementById("myModal1");
let closeBtn = document.querySelector(".close1");

// Abrir la modal cuando se hace clic en un botón u otro elemento
// Aquí, asumiremos que tienes un botón con el id "openModalBtn"
open.addEventListener("click", function() {
    modal.style.display = "block";
});

// Cerrar la modal cuando se hace clic en el botón de cerrar o fuera de la modal
window.addEventListener("click", function(event) {
    if (event.target == modal || event.target == closeBtn) {
    modal.style.display = "none";   
    }
}); 
//-------------------------------------------------------------------------------------------------------
//Modal Circulo(Perimetro)

let open2 = document.getElementById("perimetrocirculo") 
let modal2 = document.getElementById("myModal2");
let closeBtn2 = document.querySelector(".close2");

// Abrir la modal cuando se hace clic en un botón u otro elemento
// Aquí, asumiremos que tienes un botón con el id "openModalBtn"
open2.addEventListener("click", function() {
    modal2.style.display = "block";
});

// Cerrar la modal cuando se hace clic en el botón de cerrar o fuera de la modal
window.addEventListener("click", function(event) {
    if (event.target == modal2 || event.target == closeBtn2) {
    modal2.style.display = "none";   
    }
}); 

//-------------------------------------------------------------------------------------------------------
//Modal Cuadrado(Area)

let open3 = document.getElementById("areacuadrado") 
let modal3 = document.getElementById("myModal3");
let closeBtn3 = document.querySelector(".close3");

// Abrir la modal cuando se hace clic en un botón u otro elemento
// Aquí, asumiremos que tienes un botón con el id "openModalBtn"
open3.addEventListener("click", function() {
    modal3.style.display = "block";
});

// Cerrar la modal cuando se hace clic en el botón de cerrar o fuera de la modal
window.addEventListener("click", function(event) {
    if (event.target == modal3 || event.target == closeBtn3) {
    modal3.style.display = "none";   
    }
}); 

//-------------------------------------------------------------------------------------------------------
//Modal Cuadrado(Perimetro)

let open4 = document.getElementById("perimetrocuadrado") 
let modal4 = document.getElementById("myModal4");
let closeBtn4 = document.querySelector(".close4");

// Abrir la modal cuando se hace clic en un botón u otro elemento
// Aquí, asumiremos que tienes un botón con el id "openModalBtn"
open4.addEventListener("click", function() {
    modal4.style.display = "block";
});

// Cerrar la modal cuando se hace clic en el botón de cerrar o fuera de la modal
window.addEventListener("click", function(event) {
    if (event.target == modal4 || event.target == closeBtn4) {
    modal4.style.display = "none";   
    }
}); 

//-------------------------------------------------------------------------------------------------------
//Modal Triangulo (Area)

let open5 = document.getElementById("areatriangulo") 
let modal5 = document.getElementById("myModal5");
let closeBtn5 = document.querySelector(".close5");

// Abrir la modal cuando se hace clic en un botón u otro elemento
// Aquí, asumiremos que tienes un botón con el id "openModalBtn"
open5.addEventListener("click", function() {
    modal5.style.display = "block";
});

// Cerrar la modal cuando se hace clic en el botón de cerrar o fuera de la modal
window.addEventListener("click", function(event) {
    if (event.target == modal5 || event.target == closeBtn5) {
    modal5.style.display = "none";   
    }
}); 
//-------------------------------------------------------------------------------------------------------
//Modal Triangulo (Area)

let open6 = document.getElementById("perimetrotriangulo") 
let modal6 = document.getElementById("myModal6");
let closeBtn6 = document.querySelector(".close6");

// Abrir la modal cuando se hace clic en un botón u otro elemento
// Aquí, asumiremos que tienes un botón con el id "openModalBtn"
open6.addEventListener("click", function() {
    modal6.style.display = "block";
});

// Cerrar la modal cuando se hace clic en el botón de cerrar o fuera de la modal
window.addEventListener("click", function(event) {
    if (event.target == modal6 || event.target == closeBtn6) {
    modal6.style.display = "none";   
    }
}); 

//-------------------------------------------------------------------------------------------------------
//Modal Rectangulo(Area)

let open7 = document.getElementById("arearectangulo") 
let modal7 = document.getElementById("myModal7");
let closeBtn7 = document.querySelector(".close7");

// Abrir la modal cuando se hace clic en un botón u otro elemento
// Aquí, asumiremos que tienes un botón con el id "openModalBtn"
open7.addEventListener("click", function() {
    modal7.style.display = "block";
});

// Cerrar la modal cuando se hace clic en el botón de cerrar o fuera de la modal
window.addEventListener("click", function(event) {
    if (event.target == modal7 || event.target == closeBtn7) {
    modal7.style.display = "none";   
    }
}); 
//-------------------------------------------------------------------------------------------------------
//Modal Rectangulo(Perimetro)

let open8 = document.getElementById("perimetrorectangulo") 
let modal8 = document.getElementById("myModal8");
let closeBtn8 = document.querySelector(".close8");

// Abrir la modal cuando se hace clic en un botón u otro elemento
// Aquí, asumiremos que tienes un botón con el id "openModalBtn"
open8.addEventListener("click", function() {
    modal8.style.display = "block";
});

// Cerrar la modal cuando se hace clic en el botón de cerrar o fuera de la modal
window.addEventListener("click", function(event) {
    if (event.target == modal8 || event.target == closeBtn8) {
    modal8.style.display = "none";   
    }
}); 

//----------------------------------Calculos Circulo----------------------------------

let result=document.querySelector(".resultado")

let btncal= document.getElementById("btncal")
btncal.addEventListener('click', function calcular(e){
    e.preventDefault();

let radioci = document.getElementById("AreaCirculo").value
let pi= 3.1416
let total= (radioci*radioci)*pi

alert("El Area Del Circulo Es: "+total)

})

let btncal2=document.getElementById("btncal2")
btncal2.addEventListener('click', function calcular(e){
    e.preventDefault();

    let diametroci = document.getElementById("PerimetroCirculo").value
    let pi2= 3.1416
    let total2= diametroci*pi2
    alert("El Perimetro Del Circulo Es: "+total2)
})

//----------------------------------Calculos CUadrado----------------------------------
let btncal3= document.getElementById("btncal3")
btncal3.addEventListener('click', function calcular(e){
    e.preventDefault();

    let areacu = document.getElementById("AreaCuadrado").value
    let total= (areacu*areacu)
    alert("El Area Del Cuadrado Es: "+total)
})

let btncal4= document.getElementById("btncal4")
btncal4.addEventListener('click', function calcular(e){
    e.preventDefault();

    let lado1 = parseInt(document.getElementById("ladoc1").value)
    let lado2 = parseInt(document.getElementById("ladoc2").value)
    let lado3 = parseInt(document.getElementById("ladoc3").value)
    let lado4 = parseInt(document.getElementById("ladoc4").value)


    let total= lado1+lado2+lado3+lado4
    alert("El Perimetro Del Cuadrado Es: "+total)
})


//----------------------------------Calculos Triangulo----------------------------------

let btncal5= document.getElementById("btncal5")
btncal5.addEventListener('click', function calcular(e){
    e.preventDefault();

    let base = parseInt(document.getElementById("base").value)
    let altura = parseInt(document.getElementById("altura").value)

    let total= (base*altura)/2
    alert("El Area Del Triangulo Es: "+total)
})

let btncal6= document.getElementById("btncal6")
btncal6.addEventListener('click', function calcular(e){
    e.preventDefault();

    let lado1 = parseInt(document.getElementById("ladoT1").value)
    let lado2 = parseInt(document.getElementById("ladoT2").value)
    let lado3 = parseInt(document.getElementById("ladoT3").value)

    let total= lado1+lado2+lado3
    alert("El Perimetro Del Triangulo Es: "+total)
})

//----------------------------------Calculos Rectangulo----------------------------------

let btncal7= document.getElementById("btncal7")
btncal7.addEventListener('click', function calcular(e){
    e.preventDefault();

    let ancho = parseInt(document.getElementById("ancho").value)
    let largo = parseInt(document.getElementById("largo").value)

    let total= ancho*largo
    alert("El Area Del Rectangulo Es: "+total)
})

let btncal8= document.getElementById("btncal8")
btncal8.addEventListener('click', function calcular(e){
    e.preventDefault();
let lado1 = parseInt(document.getElementById("ladoR1").value)
let lado2 = parseInt(document.getElementById("ladoR2").value)
let lado3 = parseInt(document.getElementById("ladoR3").value)
let lado4 = parseInt(document.getElementById("ladoR4").value)


let total= lado1+lado2+lado3+lado4
alert("El Perimetro Del Rectangulo Es: "+total)

})