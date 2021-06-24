
// Un uso que le daremos a las funciones es el de contener partes de código
// que queramos ejecutar y posiblemente reutilizar. ('modularizar')
// Sería conveniente separar los ejercicios de práctica en distintas funciones por este motivo,
// y para evitar tener mucho código comentado.

// para este ejemplo vamos a hacer el llamado a esta función desde el evento click de un botón en el html.


function evaluarParidad() {
    // Esta función llama a prompt() para tomar un número ingresado por el usuario,
    // luego se evalúa si el valor ingresado no es un número, si no lo es muestra una alerta.
    const numero = prompt('ingrese un número para evaluar su paridad');
    const esPar = parseInt(numero) % 2 === 0;

    // const noValido = numero === null || numero === '' || isNaN(numero)
    if ((numero === null) || (numero === '') || isNaN(numero)) { // Esta condición se cumple si alguno de las 3 operaciones resulta en verdadero.
        alert('no se ingreso un número válido');
    }
    // Si no se cumple la condición anterior, usa el valor guardado en esPar para evaluar la condición.
    else if (esPar) {
        alert('el número ingresado es par');
    }

    else {
        alert('el número ingresado es impar');
    }

}

// declaramos una función bucleEvaluarParidad que llamara a su vez a evaluarParidad
function bucleEvaluarParidad() {
    // Esta función tiene un bucle que se repetirá mientras que se cumpla la condición indicada.
    // Cuando esta no se cumpla, es decir que la condición resulte en false, saldrá del bucle.
    let contador = 0;

    while (contador < 3) {

        evaluarParidad();

        // el operador ++ le suma +1 a contador, esto es lo que hará que el bucle deje de repetirse cuando no se cumpla la condición.
        contador++;
    }

    console.log('Terminó el bucle');
}