result=document.querySelector(".resultado")

let btncal=document.getElementById("btncal")
btncal.addEventListener("click",function Calcular(e){
    e.preventDefault()

    let palabra=document.getElementById("palabra").value
    let operacion=document.getElementById("operacion").value

if(operacion==1){
    var longitud = palabra.length;
    alert("La Longitud De La Palabra Es: "+longitud)

}else if(operacion==2){

   var mayus= palabra.toUpperCase()
   alert("La Palabra Convertida en Mayusculas Es: "+mayus)

}else if(operacion==3){
    var minus= palabra.toLowerCase()
    alert("La Palabra Convertida en Minisculas Es: "+minus)
}else if(operacion==4){

    var prime= palabra.charAt(0)

    alert("La Primera Letra De La Palabra Es:"+prime)
}else{
    alert("Error")
}

})
