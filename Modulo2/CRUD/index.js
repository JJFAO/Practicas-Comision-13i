
// Elementos del formulario de alta
const emailInput = document.getElementById('email');
const passInput = document.getElementById('pass');
const nombreInput = document.getElementById('nombre');
const rolInput = document.getElementById('rol');
// Elemento del tbody de la tabla
const contenidoTabla = document.getElementById('contenidoTabla');
// Elemento del contenido del modal de detalle
const detalleUsuarioDiv = document.getElementById('detalleUsuario');

// Elementos del formulario de alta
const nombreEditadoInput = document.getElementById('nombreEditado');
const rolEditadoInput = document.getElementById('rolEditado');

const usuarioJson = localStorage.getItem('usuarios'); // Traer de localStorage el dato asociado a la key "usuarios".
let usuarios = JSON.parse(usuarioJson) || []; // Convertir datos en formato JSON a código JavaScript.

let usuarioEditadoId = '';

function ID() {
    return '_' + Math.random().toString(36).substr(2, 9);
}

function agregarUsuario(event) {
    event.preventDefault();
    const email = emailInput.value;
    const pass = passInput.value;
    const nombre = nombreInput.value;
    const rol = rolInput.value;

    const nuevoUsuario = {
        email: email,
        pass: pass,
        nombre: nombre,
        rol: rol,
        registro: Date.now(),
        id: ID(),
    };

    usuarios.push(nuevoUsuario);
    mostrarUsuarios();
    const usuariosJson = JSON.stringify(usuarios); // Convertir datos al formato JSON.
    localStorage.setItem('usuarios', usuariosJson); // Guardar en localStorage un dato asociado a la key "usuarios".
    console.log('Se registró exitosamente un usuario. 👨‍💻');
    event.target.reset(); // reset limpia los campos del formulario.
}

/** Cargar la tabla de usuarios en el documento HTML */
function mostrarUsuarios() {
    function armarFilasDeUsuarios(usuario) {
        const tr = `
        <tr>
            <td>${usuario.nombre}</td>
            <td>${usuario.rol}</td>
            <td>
                <!-- Button trigger modal -->
                <button onclick="mostrarDetalleUsuario('${usuario.id}')" type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#modalDetalleUsuario"> Ver detalle </button>
                <button onclick="cargarModalEditar('${usuario.id}')" class="btn btn-warning" data-bs-toggle="modal" data-bs-target="#modalEditarUsuario">Editar</button>
                <button onclick="eliminarUsuario('${usuario.id}')" class="btn btn-danger">Eliminar</button>
            </td>
        </tr>
        `;
        return tr;
    }
    const contenido = usuarios.map(armarFilasDeUsuarios);
    // El método map genera un array nuevo sin modificar el array original.
    // Recibe por parámetros la función que debe ejecutarse por cada elemento del array.
    contenidoTabla.innerHTML = contenido.join('');
}

function eliminarUsuario(id) {
    function usuariosFilter(usuario) {
        return usuario.id !== id;
    }
    const usuariosFiltrados = usuarios.filter(usuariosFilter);
    usuarios = usuariosFiltrados;
    mostrarUsuarios();
    const usuariosJson = JSON.stringify(usuarios);
    localStorage.setItem('usuarios', usuariosJson);
}

function mostrarDetalleUsuario(id) {
    const usuarioEncontrado = usuarios.find(function (usuario) {
        return usuario.id === id;
    });

    const fecha = new Date(usuarioEncontrado.registro);

    const contenido = `
    <p>Nombre: ${usuarioEncontrado.nombre}</p>
    <p>Correo: ${usuarioEncontrado.email}</p>
    <p>Rol: ${usuarioEncontrado.rol}</p>
    <p>Fecha de registro: ${fecha.toLocaleString()}</p>
    `;
    detalleUsuarioDiv.innerHTML = contenido;
}

/** Esta función carga los datos del usuario seleccionado,
en los campos del formulario de edición del documento HTML.
@params {id} El id de un usuario.
*/
function cargarModalEditar(id) {
    // Buscar el usuario en el array usando el método find().
    const usuarioEncontrado = usuarios.find(function (usuario) {
        return usuario.id === id;
    });
    nombreEditadoInput.value = usuarioEncontrado.nombre;
    rolEditadoInput.value = usuarioEncontrado.rol;
    // Actualizar el valor de la variable auxiliar usuarioId, con el id del usuario encontrado.
    usuarioEditadoId = id;
}

/** Al evento submit del formulario de edición le asignamos esta función,
que actualiza al usuario seleccionado, con los datos ingresados.  */
function editarUsuario(event) {
    event.preventDefault();
    const nombreEditado = nombreEditadoInput.value;
    const rolEditado = rolEditadoInput.value;
    const usuarioEditado = { rol: rolEditado, nombre: nombreEditado };

    function usuariosActualizadoMap(usuario) {
        if (usuario.id === usuarioEditadoId) {
            // Actualizar el usuario
            return { ...usuario, ...usuarioEditado };
        } else {
            // Retornar el resto de usuarios sin modificar
            return usuario;
        }
    }
    const usuariosActualizado = usuarios.map(usuariosActualizadoMap);
    usuarios = usuariosActualizado;
    mostrarUsuarios();
    const usuariosJson = JSON.stringify(usuarios);
    localStorage.setItem('usuarios', usuariosJson);
}

mostrarUsuarios();
