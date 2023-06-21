result=document.querySelector(".resultado")

let btncal=document.getElementById("btncal")
btncal.addEventListener("click",function Calcular(e){
    e.preventDefault()

    let grados=parseFloat(document.getElementById("grados").value)
    let operacion=document.getElementById("operacion").value
    let operacion2=document.getElementById("operacion2").value

if(operacion==1 && operacion2==2){
    alert("Has elegido pasar de Farenheit a Celsius")
    var resultado= (grados -32)*5/9
    alert("El Numero Ingresado Es "+grados+" Por lo Tanto La Convercion Es: "+resultado.toFixed(2))

}else if(operacion==1 && operacion2==3){
   alert("Has elegido pasar de Farenheit a Kelvin")
   var resultado= (grados-32)* 5/9 +273.15
   alert("El Numero Ingresado Es "+grados+"Por Lo Tanto La Convercion Es "+resultado.toFixed(2))

}else if(operacion==2 && operacion2==1){
    alert("Has elegido pasar de Celcuis a Farenheit")
    var resultado=(grados * 9/5) + 32
    alert("El Numero Ingresado Es: "+grados+" Por Lo Tanto La Convercion Es: "+resultado.toFixed(2))

}else if(operacion==2 && operacion2==3){
    alert("Has elegido pasar de Celcius a Kelvin")
    var resultado= grados +273.15
    alert("El Numero Ingresado Es "+grados+" Por Lo Tanto La Convercion Es: "+resultado.toFixed(2))

}else if(operacion==3 && operacion2==1){
    alert("Has elegido pasar de Kelvin a Farenheit")
    var resultado= (grados -273.15) * 9/5 +32
    alert("El Numero Ingresado Es: "+grados+" Por Lo Tanto La Convercion Es: "+resultado.toFixed(2))

}else if(operacion==3 && operacion2==2){
    alert("Has elegido pasar de Kelvin a Celsius")
    var resultado= grados -273.15
    alert("El Ingresado Es: "+grados+" Por Lo Tanto La Convercion Es: "+resultado.toFixed(2))
}else{
    alert("ERROR OPERACION NO DISPONIBLE VUELVE A INTENTAR, GRACIAS")
}

})