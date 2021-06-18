function mostrarMensaje() {
    let mensaje = prompt('Escriba su nombre: ');
    console.log(mensaje);
}

// alert('Hola mundo');

// var Numero = 500;
// console.log(Numero)
// var Numero = 100;
// console.log(Numero)

// let Numero = 500;
// console.log(Numero)
// Numero = 100;
// console.log(Numero)

const Numero = 500;
// console.log(Numero)
// Numero = 100;
// console.log(Numero)

// let cadena = 'cadena de caracteres';
// let bool = true;
// let dato = null;

// let mensaje = prompt('Escriba su nombre: ');

// console.log(prompt('Escriba su nombre: '));

// let acepta = confirm('"¿Desea continuar?"');
// console.log(acepta);

// mostrarMensaje();
// mostrarMensaje();
// mostrarMensaje();

// let numero = 30 + 20 - 10 / 2;
// console.log(numero)

// let bool = true || true;
// console.log("🚀 - bool", bool);

// if (false) {
//     console.log('dentro del if')
// }

// function evaluar() {
//     let acepta = confirm('desea entrar?');

//     if (acepta) {
//         console.log('dentro del if');
//     } else {
//         console.log('dentro del else');
//     }
// }

// const bool = confirm('desea evaluar?')

// if (bool) {
//     evaluar()
// }

// -----------> Ejemplo con While()

// let continuar = true
// let contador = 0

// while (continuar) {
//     continuar = confirm('desea continuar?');
//     if (continuar) {
//         contador = contador + 1;
//     }
// }

// console.log("🚀 - contador", contador);

// <------------


// -------> Ejercicio evaluar paridad
// Se necesita un programa que pueda evaluar si un número ingresado es par.
// - Pedir un número al usuario. (Vamos a usar la función prompt para obtener datos del usuario)
// - Evaluar si es par el número ingresado.
// - Mostrar el resultado indicando si es par o impar.

function IsPar(value) {
    if (value % 2 == 0) {
        alert('El número ' + value + ' es par');
    } else {
        alert('El número ' + value + ' es impar');
    }
}

function evaluarParidad() {
    const numeroIngresado = prompt('Ingrese un numero');
    IsPar(numeroIngresado);
}



// ---------> Solución ejercicio 3
function ejercicio3() {
    let continuar = true;
    let palabrasConcatenadas = '';

    while (continuar) {
        continuar = confirm('desea continuar?');
        if (continuar) {
            let palabra = prompt('Ingrese una palabra');
            if (palabrasConcatenadas === '') {
                palabrasConcatenadas = palabrasConcatenadas + palabra;
            } else {
                palabrasConcatenadas = palabrasConcatenadas + ' - ' + palabra;
            }
        }
    }

    alert(palabrasConcatenadas);
    console.log("🚀 - ejercicio3 - palabrasConcatenadas", palabrasConcatenadas);
}


// ----- Bucle para repetir 10 veces una secuencia, con while ()
// let numero = 0;

// while (numero < 10) {
//     console.log(numero);
//     numero++;
// }


// ----- Bucle para repetir 10 veces una secuencia, con for ()
const repeticiones = 10;

for (let indice = 0; indice < repeticiones; indice++) {
    console.log(indice);
}


// ----- Bucle para repetir 10 veces una secuencia, con for (), de forma descendente
// const repeticiones = 0;

// for (let indice = 9; indice >= repeticiones; indice--) {
//     console.log(indice);
// }
