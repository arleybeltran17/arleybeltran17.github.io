let result=document.querySelector(".resultado")
const mensajeError = document.querySelector(".mensaje-error");
let btncal= document.getElementById("btncal")
btncal.addEventListener('click', function calcular(e){
    e.preventDefault();


let nombre=document.getElementById("nombre").value 
let apellido=document.getElementById("apellido").value 
let materia=document.getElementById("materia").value
 



if(nombre==0 && apellido==0 && materia==0){
    result.textContent = "Error: Seleccione Algun Valor";
}else if(nombre==1 && apellido==1 && materia==1){
    result.textContent = "Correcto";
}else if(nombre==2 && apellido==2 && materia==2){
    result.textContent = "Correcto";
}else if(nombre==3 && apellido==3 && materia==3){
    result.textContent = "Correcto";
}else if(nombre==4 && apellido==4 && materia==4){
    result.textContent = "Correcto";
}else if(nombre==5 && apellido==5 && materia==5){
    result.textContent = "Correcto";
}else if(nombre==6 && apellido==6 && materia==6){
    result.textContent = "Correcto";
}else if(nombre==7 && apellido==7 && materia==7){
    result.textContent = "Correcto";
}else{
    result.textContent = "Error: Cada Instructor Debe Coincidir Con Su Nombre Apellido Y Materia";
}

})