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
// const repeticiones = 10;

// for (let indice = 0; indice < repeticiones; indice++) {
//     console.log(indice);
// }


// ----- Bucle para repetir 10 veces una secuencia, con for (), de forma descendente
// const repeticiones = 0;

// for (let indice = 9; indice >= repeticiones; indice--) {
//     console.log(indice);
// }


// -------> Ejemplo de String con template literal o string template
// var apellido = 'Moreno'
// var nombre = 'Rick ' + apellido + '.'
// var nombre = `Rick ${apellido}.`



function ejercicioEnClase() {
    // Para resolver este problema necesitaremos de varios contadores porque se requiere registrar distintas cantidades.
    const repeticiones = 2;
    let contadorNegativos = 0;
    let contadorPositivos = 0;
    let contadorMultiplos15 = 0;
    // Y de un acumulador porque es necesario calcular una suma dentro del bucle.
    let sumadorPares = 0;

    for (let indice = 0; indice < repeticiones; indice++) {
        // Usamos un bucle for () para pedir 10 números al usuario y evaluar cada uno.
        const numeroIngresado = prompt('ingrese un número')
        const esNegativo = numeroIngresado < 0;
        const esPositivo = numeroIngresado > 0;

        if (esNegativo) {
            // Le sumamos +1 al contador de Negativos si se cumple que numeroEntero es negativo.
            contadorNegativos = contadorNegativos + 1;
        } else if (esPositivo) {
            contadorPositivos += 1;
        }

        const esMultiplo15 = esPositivo && numeroIngresado % 15 === 0;
        if (esMultiplo15) {
            contadorMultiplos15 += 1;
        }

        const esPar = numeroIngresado % 2 === 0;
        if (esPar) {
            // Sumamos el número ingresado al acumulador si se cumple que el número ingresado es par.
            sumadorPares += parseInt(numeroIngresado);
        }
    }

    console.log('La cantidad de negativos es: ', contadorNegativos);
    console.log('La cantidad de positivos es: ', contadorPositivos);
    console.log('La cantidad de multiplos de 15 es: ', contadorMultiplos15);
    console.log('La suma de los pares es: ', sumadorPares);
    // Al finalizar la ejecución del bucle, mostramos los valores que guardan las variables.
}
