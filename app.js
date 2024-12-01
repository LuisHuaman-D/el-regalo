function cambiarColorDeFondo() {
    const bgColor = prompt("Ingrese un color en ingles, hexadecimal o rgb para personalizar el sitio");
    document.body.style.backgroundColor = bgColor;   
}
cambiarColorDeFondo();

function guardarNombresDeHermanos() {
    const cantidadDeHermanos = parseInt( 
        prompt("Ingrese la cantidad de hermanos")
    );
    
    const  nombresDeHermanos = []
    let contador = 0
    while (contador < cantidadDeHermanos){
        //preguntamos el nombre del usuario
        const cantidadDeHermanos = prompt("Ingrese la cantidad de hermanos")
        nombresDeHermanos.push(cantidadDeHermanos)
        contador++
    }
    //console.log("Lista de hermanos:", nombresDeHermanos);
    alert("Lista de hermanos: " + nombresDeHermanos.join(", "));
}


//código generado por la IA
function generarColorAleatorio() {
    // Generar un color hexadecimal aleatorio
    const letras = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
      color += letras[Math.floor(Math.random() * 16)];
    }
    return color;
  }

  function generarBloques() {
    const container = document.getElementById('container');
    container.innerHTML = ''; // Limpiar contenido previo

    const cantidad = prompt('¿Cuántos bloques deseas generar?');
    if (isNaN(cantidad) || cantidad <= 0) {
      alert('Por favor, ingresa un número válido.');
      return;
    }

    for (let i = 0; i < cantidad; i++) {
      const bloque = document.createElement('div');
      bloque.classList.add('block');
      bloque.style.backgroundColor = generarColorAleatorio();
      container.appendChild(bloque);
    }
  }


    //función para quitar decimales y generar número aleatorios
    function aleatorio(min, max) {
        return Math.floor(Math.random() * (max - min + 1) + min);
    }
    
    function eleccion(jugada) {
        let resultado = "";
        if (jugada === 1) {
            resultado = "piedra";
        } else if (jugada === 2) {
            resultado = "papel";
        } else if (jugada === 3) {
            resultado = "tijera";
        } else {
            resultado = "MALA ELECCIÓN";
        }
        return resultado;
    }
    
    function juegoYanquenpo() {
        let jugador = 0;
        let pc = 0;
        let triunfos = 0;
        let perdidas = 0;
    
        while (triunfos < 3 && perdidas < 3) {
            pc = aleatorio(1, 3);
            jugador = parseInt(prompt("Elige: 1 para piedra, 2 para papel, 3 para tijera"), 10);
    
            if (isNaN(jugador) || jugador < 1 || jugador > 3) {
                alert("Debes elegir un número entre 1 y 3.");
                continue;
            }
    
            alert("Tu eliges: " + eleccion(jugador));
            alert("PC elige: " + eleccion(pc));
    
            // Combate
            if (jugador === pc) {
                alert("Empate");
            } else if (
                (jugador === 1 && pc === 3) ||
                (jugador === 2 && pc === 1) ||
                (jugador === 3 && pc === 2)
            ) {
                alert("¡GANASTE!");
                triunfos++;
            } else {
                alert("PERDISTE");
                perdidas++;
            }
        }
    
        alert("Ganaste " + triunfos + " veces. Perdiste " + perdidas + " veces.");
    }
            







/*
// creo mi variable y busco la clase
const cerrarBanner = document.querySelector(".banner-cerrar")
const topBanner = document.getElementById("top-banner-header")
cerrarBanner.addEventListener("click", function(){
    topBanner.style.display = "none";
});



//busco el elemento id 
    const cambiarFondo = document.getElementById("input-color");
    cambiarFondo.addEventListener("input", function () {
        //document.top-header.style.backgroundColor = cambiarFondo.value;
        document.querySelector(".top-header").style.background = cambiarFondo.value
    });



// Función para cargar y mostrar el nombre almacenado en Session Storage
function cargarNombre() {
    let nombreGuardado = sessionStorage.getItem('nombreDeUsuario');

    // Si no hay nombre, pedirlo al usuario
    if (!nombreGuardado) {
        const nuevoNombre = prompt("Bienvenido, ¿Cuál es tu nombre?");
        if (nuevoNombre) {
            sessionStorage.setItem('nombreDeUsuario', nuevoNombre);
            nombreGuardado = nuevoNombre;
        } else {
            nombreGuardado = 'Invitado';
        }
    }
    // Mostrar el nombre en el span
    document.getElementById('nombreUsuario').textContent = nombreGuardado;
}

// Función para editar el nombre
function editarNombre() {
    const nuevoNombre = prompt("¿Cuál es tu nuevo nombre?");
    if (nuevoNombre) {
        sessionStorage.setItem('nombreDeUsuario', nuevoNombre);
        cargarNombre(); // Actualizar el nombre en el DOM
    }
}

// Cargar el nombre al iniciar la página
cargarNombre();

// Agregar evento click al ícono de edición
document.getElementById('editarUsuario').addEventListener('click', editarNombre);


const edad = prompt("Ingresa la edad");
const edadNumber = parseInt(edad); // NaN (Not a Number) "10" => 10
// crear una condificional para validar que la conversión a number fue existosa
// if = si (condicional)
if (isNaN(edadNumber) === false) {
// ENTONCES LA CONVERSION FUE EXISTOSA
// DEBEMOS EVALUAR SI LA EDAD >= 18 ENTONCES LO DEJO PASA SI NO PONGO TODO EN BLANCO
if (edadNumber >= 18) {
console.log("Es mayor de edad");
} else {
alert("No tienes permiso para ver al sitio web")
document.body.style.display = "none";
}
} else {
// HAGO ALGO PARA MANEJAR EL ERROR
alert("El valor ingresado no es un número válido");
}

*/