//--------------------------Evento 1(Click)--------------------------
// Obtener referencia al botón
    var boton = document.getElementById('miBoton');

    // Agregar el evento de clic
    boton.addEventListener('click', function() {
// Lógica que se ejecuta al hacer clic
      alert('Se hizo clic en el botón');
    });


//--------------------------Evento 2 Move  --------------------------
// Obtener el elemento de entrada
    const input3 = document.getElementById('myInput3');
    
    // Verificar si se encontró el elemento
    if (input3) {
      // Agregar el controlador de eventos para el evento keyup
      input3.addEventListener('keyup', function() {
        // Convertir el valor a mayúsculas y asignarlo nuevamente al campo de entrada
        this.value = this.value.toUpperCase();
      });
    } else {
      console.log("No se encontró el elemento de entrada.");
    }

//--------------------------Evento 3 KeyDown--------------------------
// Obtener referencia al elemento de entrada de texto
var input = document.getElementById('miInput');

// Agregar el evento de keydown
input.addEventListener('keydown', function(event) {
  // Obtener el código de la tecla presionada
  var keyCode = event.keyCode || event.which;

  // Lógica que se ejecuta al presionar una tecla
  alert('Se presionó la tecla con código: ' + keyCode);
});


//--------------------------Evento4 DragDrop--------------------------
var dragElement = document.getElementById('dragElement');
    var dropzone = document.getElementById('dropzone');

    dragElement.addEventListener('dragstart', function(event) {
      event.dataTransfer.setData('text/plain', event.target.id);
    });

    dropzone.addEventListener('dragover', function(event) {
      event.preventDefault();
    });

    dropzone.addEventListener('dragenter', function(event) {
      dropzone.style.backgroundColor = 'lightblue';
    });

    dropzone.addEventListener('dragleave', function(event) {
      dropzone.style.backgroundColor = '';
    });

    dropzone.addEventListener('drop', function(event) {
      event.preventDefault();
      var draggedElementId = event.dataTransfer.getData('text/plain');
      var draggedElement = document.getElementById(draggedElementId);
      dropzone.appendChild(draggedElement);
      dropzone.style.backgroundColor = '';
    });

//--------------------------Evento 5 MouseOver--------------------------
var elemento = document.getElementById('miElemento');

    elemento.addEventListener('mouseover', function(event) {
      elemento.style.backgroundColor = 'red';
    });

    elemento.addEventListener('mouseout', function(event) {
      elemento.style.backgroundColor = 'yellow';
    });

//--------------------------Evento 6 MouseMove --------------------------
var elemento3 = document.getElementById('miElemento3');

elemento3.addEventListener('mousemove', function(event) {
  // Obtener las coordenadas del cursor del mouse
  var x = event.clientX;
  var y = event.clientY;

  // Mostrar las coordenadas en la consola
  console.log('Coordenadas del mouse: X=' + x + ', Y=' + y);
});

//--------------------------Evento 7 Focus--------------------------
var input = document.getElementById('miInput2');

    input.addEventListener('focus', function(event) {
      input.style.backgroundColor = 'yellow';
    });

    input.addEventListener('blur', function(event) {
      input.style.backgroundColor = 'white';
    });

//--------------------------Evento 8 DblClick --------------------------

var boton2 = document.getElementById('miBoton2');

boton2.addEventListener('dblclick', function(event) {
alert('¡Doble clic realizado!');
});
//--------------------------Evento 9 Mouse Up --------------------------
var boton3 = document.getElementById('miBoton3');

boton3.addEventListener('mouseup', function(event) {
    alert('Se soltó el botón del mouse');
});

//--------------------------Evento 10 Scroll--------------------------

var miDiv = document.getElementById('miDiv');

    miDiv.addEventListener('scroll', function(event) {
      alert('Se ha realizado un desplazamiento');
    });
