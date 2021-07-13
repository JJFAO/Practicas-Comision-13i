const inputNombre = document.getElementById('inputName');
const inputPrecio = document.getElementById('inputPrice');
const formProducto = document.getElementById('formProducto');
const contenidoTabla = document.getElementById('contenidoTabla');

// Un array de productos con elementos "hardcodeados".
const productos = [
    {
        nombre: 'Manzana 🍎',
        precio: 100,
    },
    {
        nombre: 'Naranja 🍊🍊🍊',
        precio: 5550,
    },
    {
        nombre: 'Empanada 🥟',
        precio: 50,
    },
];

function agregarProducto(event) {
    event.preventDefault(); // Este metodo es necesario para evitar que se
    // recargue la página, en el evento onsubmit.
    const nombre = inputNombre.value;
    const precio = inputPrecio.value;
    const producto = { nombre: nombre, precio: precio };
    productos.push(producto);
    mostrarProductos();
}

// formProducto.onsubmit = agregarProducto; // Alternativa a usar el atributo onsubmit en la etiqueta html.

function mostrarProductos() {
    let contenido = [];
    for (let i = 0; i < productos.length; i++) {
        const producto = productos[i];
        const tr = `
        <tr>
            <th scope="row">${i}</th>
            <td>${producto.nombre}</td>
            <td>${producto.precio}</td>
            <td><button class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">ver</button>
            </td>
        </tr>
        `;
        contenido.push(tr);
    }
    contenidoTabla.innerHTML = contenido.join('');
}

mostrarProductos();
