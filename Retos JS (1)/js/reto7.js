let result = document.querySelector(".resultado");

//-------------------------------Terminos De Uso----------------------------------
let open = document.getElementById("Terminos");
let modal = document.getElementById("myModal1");
let closeBtn = document.querySelector(".close1");

open.addEventListener("click", function() {
    modal.style.display = "block";
});

// Cerrar la modal cuando se hace clic en el botón de cerrar o fuera de la modal
window.addEventListener("click", function(event) {
    if (event.target == modal || event.target == closeBtn) {
        modal.style.display = "none";
    }
});

let aceptar = document.getElementById("Aceptar");
aceptar.addEventListener("click", function(e) {
    e.preventDefault();

    open.checked = true;
    modal.style.display = "none";
});

let rechazar = document.getElementById("Rechazar");
rechazar.addEventListener("click", function(e) {
    e.preventDefault();

    open.checked = false;
    modal.style.display = "none";
});


//\d{1,15}
//[A-Za-zÑñá-úÁ-Ú ]{10,50}

//-------------------------------Validaciones----------------------------------
//reglas de validacion
const number=/^[0-9]{5,15}$/
const text=/[A-Za-zÑñá-úÁ-Ú ]{10,50}/
let flag

//-------------------------------Validaciones Numero De Documento----------------------------------
//acceder a elementos que se van a alterar

const form=document.getElementById('form')

const f1=document.querySelector('#CampoNumeroDoc .feedback')

form.NumeroDoc.addEventListener('input',(e) =>{
e.preventDefault();

if(number.test(e.target.value)){
    //Regla Pasa La Validacion
    form.NumeroDoc.setAttribute("class","success")
    f1.style.display= 'none'
    f1.style.opacity= '0'
    flag=true

}else{
    //Regla No Pasa La Variable
    form.NumeroDoc.setAttribute("class","error")
    f1.textContent="Debe Digitar Minimo 5 numeros y maximo 15"
    f1.style.display= 'block'
    f1.style.opacity= '1'
    flag=false

}
})


//-------------------------------Validaciones Nombre----------------------------------
//validaciones
const name1=/[A-Za-zÑñá-úÁ-Ú ]/
const f2= document.querySelector('#CampoNombre .feedback')

form.Nombre.addEventListener('input', (e)=>{
    e.preventDefault()

    if(name1.test(e.target.value)){
        form.Nombre.setAttribute("class","success")
        f2.style.display= 'none'
        f2.style.opacity= '0'
        flag=true
    }else{
        form.Nombre.setAttribute("class","error")
        f2.textContent="Debe Digitar Su Nombre"
        f2.style.display= 'block'
        f2.style.opacity= '1'
        flag=false
    }

})
//-------------------------------Validaciones Apellido----------------------------------

const lastname=/[A-Za-zÑñá-úÁ-Ú ]/
const f3=document.querySelector('#CampoApellido .feedback')

form.Apellido.addEventListener('input', (e)=>{
    e.preventDefault();

    if(lastname.test(e.target.value)){
        form.Apellido.setAttribute("class","success")
        f3.style.display= 'none'
        f3.style.opacity= '0'
        flag=true
    }else{
        form.Apellido.setAttribute("class","error")
        f3.textContent="Debe Digitar Su Apellido"
        f3.style.display= 'block'
        f3.style.opacity= '1'
        flag=false
    }
})

//-------------------------------Validaciones Fecha De Nacimiento----------------------------------

const f4=document.querySelector('#CampoFechaDeNacimiento .feedback')


form.FechaNacimiento.addEventListener('input', (e)=>{
    e.preventDefault();

const Fechalimite=new Date('01-01-2002')
const FechaNacimiento=document.querySelector('#FechaNacimiento').value
let FechaN= new Date(FechaNacimiento)

    console.log(Fechalimite)
    console.log(FechaN)

if(FechaN<Fechalimite){
    form.FechaNacimiento.setAttribute("class","success")
        f4.style.display= 'none'
        f4.style.opacity= '0'
        flag=true
}else{
    form.FechaNacimiento.setAttribute("class","error")
        f4.textContent="Debe Seleccionar Su Fecha De Nacimiento, Debe Ser Antes De 2002"
        f4.style.display= 'block'
        f4.style.opacity= '1'
        flag=false
}

})


//-------------------------------Validaciones Correo Electronico----------------------------------


var patron = /^[A-Za-z0-9._%+-]+@misena\.edu\.co$/;  

const f5= document.querySelector('#CampoEmail .feedback')

form.Email.addEventListener('input', (e)=>{
    e.preventDefault()

    if(patron.test(e.target.value)){
        form.Email.setAttribute("class","success")
        f5.style.display= 'none'
        f5.style.opacity= '0'
        flag=true
    }else{
        form.Email.setAttribute("class","error")
        f5.textContent="Debe Digitar Un Correo @misena.edu.co"
        f5.style.display= 'block'
        f5.style.opacity= '1'
        flag=false
    }

})


//-------------------------------Validaciones Contraseña----------------------------------

var contra = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{10,}$/;

const f6= document.querySelector('#CampoPassword .feedback')

form.Password.addEventListener('input', (e)=>{
    e.preventDefault()

    if(contra.test(e.target.value)){
        form.Password.setAttribute("class","success")
        f6.style.display= 'none'
        f6.style.opacity= '0'
        flag=true
    }else{
        form.Password.setAttribute("class","error")
        f6.textContent="La Contraseña Debe Tener Minimo Una Mayuscula Una Minuscula Un Numero y debe tener minimo 10 caracteres"
        f6.style.display= 'block'
        f6.style.opacity= '1'
        flag=false
    }

})
//-------------------------------Validaciones Comprobar Contraseña----------------------------------


const f7= document.querySelector('#CampoComprobar .feedback')

form.Compassword.addEventListener('input', (e)=>{
    e.preventDefault()

    let Contraseña=document.getElementById('Password').value
    let Comprobar=document.getElementById('Compassword').value

    if(Comprobar === Contraseña){
        form.Compassword.setAttribute("class","success")
        f7.style.display= 'none'
        f7.style.opacity= '0'
        flag=true
    }else{
        form.Compassword.setAttribute("class","error")
        f7.textContent="Las Contraseñas Deben Ser Iguales "
        f7.style.display= 'block'
        f7.style.opacity= '1'
        flag=false
    }

})





form.addEventListener('submit', (e)=>{
    e.preventDefault()

    if(form.NumeroDoc.value==null || form.NumeroDoc.value==0 || flag==false){
        alert('Debe Ingresar Un Numero De Documento Valido')
        form.NumeroDoc.focus()
    }else if(form.Nombre.value==null||form.Nombre.value==0  ||flag==false){

        alert('Debe Ingresar Su Nombre No Debe Estar Vacio')
        form.Nombre.focus()
    }else if(form.Apellido.value==null||form.Apellido.value==0  ||flag==false){
        alert('Debe Ingresar Su Apellido No Debe Estar Vacio')
        form.Apellido.focus()

    }else if(form.FechaNacimiento.value==null||form.FechaNacimiento.value==0  ||flag==false){
        alert('Debe Seleccionar Su Fecha De Nacimiento, No Debe Estar Vacio')
        form.FechaNacimiento.focus()

    }else if(form.Email.value==null||form.Email.value==0  ||flag==false){
        alert('Debe Digitar Su Correo')
        form.Email.focus()

    }else if(form.Password.value==null||form.Password.value==0  ||flag==false){
        alert('Debe Digitar Su Contraseña')
        form.Password.focus()

    }else if(form.Compassword.value==null||form.Compassword.value==0  ||flag==false){
        alert('Debe Validar Su Contraseña')
        form.Password.focus()

    }else if(form.Terminos.checked==false||form.Terminos.checked==false  ||flag==false){
        alert('Debe Aceptar Los Terminos')
        form.Terminos.focus()

    }else if(form.tipoDocumento.value==0||form.tipoDocumento.value==0 ||flag==false){
        alert('Debe Elegir Su Tipo De Documento')
        form.Terminos.focus()

    }else{
        form.submit()
    }

})
