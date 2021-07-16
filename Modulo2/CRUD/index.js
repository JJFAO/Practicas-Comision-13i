const emailInput = document.getElementById('email');
const passInput = document.getElementById('pass');
const nombreInput = document.getElementById('nombre');
const rolInput = document.getElementById('rol');
const contenidoTabla = document.getElementById('contenidoTabla');
const detalleUsuarioDiv = document.getElementById('detalleUsuario');


const usuarioJson = localStorage.getItem('usuarios');
let usuarios = JSON.parse(usuarioJson) || [];

function ID() {
    return '_' + Math.random().toString(36).substr(2, 9);
};

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
    const usuariosJson = JSON.stringify(usuarios);
    localStorage.setItem('usuarios', usuariosJson);
    event.target.reset();
    mostrarUsuarios();
}

function mostrarUsuarios() {
    function armarFilasDeUsuarios(usuario) {
        // const fecha = new Date(usuario.registro)
        // console.log(fecha.toLocaleString())
        const tr = `
        <tr>
            <td>${usuario.nombre}</td>
            <td>${usuario.rol}</td>
            <td>
                <!-- Button trigger modal -->
                <button onclick="mostrarDetalleUsuario('${usuario.id}')" type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#modalDetalleUsuario"> Ver detalle </button>
                <button class="btn btn-warning">Editar</button>
                <button onclick="eliminarUsuario('${usuario.id}')" class="btn btn-danger">Eliminar</button>
            </td>
        </tr>
        `;
        return tr;
    }
    const contenido = usuarios.map(armarFilasDeUsuarios);

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

    const contenido = `
    <p>Nombre: ${usuarioEncontrado.nombre}</p>
    <p>Correo: ${usuarioEncontrado.email}</p>
    <p>Rol: ${usuarioEncontrado.rol}</p>
    <p>Fecha de registro: ${usuarioEncontrado.registro}</p>
    `;
    detalleUsuarioDiv.innerHTML = contenido;
}

mostrarUsuarios();
