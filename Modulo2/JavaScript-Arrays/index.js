function ejercicioConArray() {
    const repeticiones = 4;
    const negativos = [];
    const positivos = [];
    const multiplos15 = [];
    const pares = [];

    for (let indice = 0; indice < repeticiones; indice++) {
        const numeroIngresado = prompt('ingrese un número');
        const esNegativo = numeroIngresado < 0;
        const esPositivo = numeroIngresado > 0;

        if (esNegativo) {
            negativos.push(numeroIngresado);
        }

        if (esPositivo) {
            positivos.push(numeroIngresado);
        }

        const esMultiplo15 = esPositivo && numeroIngresado % 15 === 0;
        if (esMultiplo15) {
            multiplos15.push(numeroIngresado);
        }

        const esPar = numeroIngresado % 2 === 0;
        if (esPar) {
            pares.push(numeroIngresado);
        }
    }
    console.log('La cantidad de Negativos es: ', negativos.length);
    console.log('Los Negativos son: ', negativos);
    console.log('El primer Negativo es: ', negativos[0]);
    console.log('El décimo Negativo es: ', negativos[9]);
    console.log('El ultimo Negativo es: ', negativos[negativos.length - 1]);
    console.log('La cantidad de Positivos es: ', positivos.length);
    console.log('Los Positivos son: ', positivos);

    let total = 0;
    for (let index = 0; index < pares.length; index++) {
        const numero = parseInt(pares[index]);
        total = total + numero;
    }

    console.log('La sumatoria de numeros pares es: ', total);
}
