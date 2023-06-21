result=document.querySelector(".resultado")

let btncal=document.getElementById("btncal")
btncal.addEventListener("click",function Calcular(e){
    e.preventDefault()

    let lado1=parseFloat(document.getElementById("lado1").value)
    let lado2=parseFloat(document.getElementById("lado2").value)
    let lado3=parseFloat(document.getElementById("lado3").value)

    if(lado1==lado3 && lado2==lado1 && lado3==lado2){
        alert("Es Un Triangulo Equilatero Ya Que Todos Sus Lados Son Iguales")
    }else if(lado1==lado2 && lado3!= lado1){
        alert("Es Un Triangulo De Isosceles Ya Que 2 Lados Son Iguales Y Uno Diferente")
    }else if(lado2==lado3 && lado1!= lado2){
        alert("Es Un Triangulo De Isosceles Ya Que 2 Lados Son Iguales Y Uno Diferente")
    }else if(lado1==lado3 && lado2!= lado1){
        alert("Es Un Triangulo De Isosceles Ya Que 2 Lados Son Iguales Y Uno Diferente")
    }else if(lado1 != lado2 && lado2 != lado3 && lado3 != lado1 && lado3 != lado1){
        alert("Es Un Triangulo Escaleno Ya Que Cada Lado Tiene Una Medida Diferente")
    }

})
