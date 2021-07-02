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

// Solicitar la cantidad de alumnos ✔
// Por cada alumno ingresar una nota ✔
// Mostrar la cantidad de alumnos aprobados, la nota aprobación 6. ✔
// - Con una condición evaluar si la nota esta aprobada.
// - Contar cada nota aprobada. Podemos usar una variable contador.

function calcularAprobados() {
    const cantidadAlumnos = parseInt(prompt('Ingrese la cantidad de alumnos 😒'));
    const notas = [];

    for (let i = 0; i < cantidadAlumnos; i++) {
        const nota = prompt('ingrese la nota');
        notas.push(nota);
    }

    let cantidadAprobados = 0;
    for (let index = 0; index < notas.length; index++) {
        const nota = notas[index];
        if (nota >= 6) {
            cantidadAprobados = cantidadAprobados + 1;
        }
    }

    console.log(
        'Del total de alumnos ' + cantidadAlumnos + ', la cantidad de aprobados es ⭐: ' + cantidadAprobados
    );
    console.log(`Del total de alumnos ${notas.length}, la cantidad de aprobados es 😎: ${cantidadAprobados}`);
    // console.log('Las notas ingresadas son: ', notas)
}

const nombre = 'Ricardo';
const rol = 'Co-mentor';

const persona = {
    nombre: 'Ricardo',
    rol: 'Co-mentor',
    apellido: 'Moreno',
};

const producto = {
    'nombre-persona': 'cosa',
    precio: 100,
};

const propiedad = 'apellido';

// -----------------------
// - "Hardcodear" un array de objetos de productos, con nombre y precio.
// Pedir al usuario datos de nombre y precio,
// para agregar un producto al array.

const productos = [
    {
        nombre: 'Manzana 🍎',
        precio: 100,
    },
    {
        nombre: 'Naranja 🍊',
        precio: 50,
    },
    {
        nombre: 'Empanada 🥟',
        precio: 50,
    },
];

function agregarProductos() {
    const nombre = prompt('Ingrese nombre de producto');
    const precio = parseInt(prompt('Ingrese el precio del producto'));
    const producto = { nombre: nombre, precio: precio };
    productos.push(producto);
    console.log(productos);
}


//-------- Adicional
// Que el usuario pueda seleccionar distintos productos de la lista.
 // - Listar productos para el usuario.
 // - Seleccionar un producto del listado.
function mostrarListado() {
    // console.log(productos)
    for (let i = 0; i < productos.length; i++) {
        const producto = productos[i];
        console.log(`codigo: ${i}, ${producto.nombre}, $${producto.precio}`)
    }
}




// Que estos se agreguen a un array de compras.

// Y al finalizar que muestre la suma total de todos los productos
// que seleccionó el usuario.
