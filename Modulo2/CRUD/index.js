const emailInput = document.getElementById('email');
const passInput = document.getElementById('pass');
const nombreInput = document.getElementById('nombre');
const rolInput = document.getElementById('rol');
const contenidoTabla = document.getElementById('contenidoTabla');

const usuarios = [];

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
    };

    usuarios.push(nuevoUsuario);
    const usuariosJson = JSON.stringify(usuarios);
    localStorage.setItem('usuarios', usuariosJson);

    event.target.reset();
    mostrarUsuarios();
}

function mostrarUsuarios() {
    function armarFilasDeUsuarios(usuario) {
        const tr = `
        <tr>
            <td>${usuario.nombre}</td>
            <td>${usuario.rol}</td>
            <td><button class="btn btn-warning">Editar</button></td>
        </tr>
        `;
        return tr;
    }
    const contenido = usuarios.map(armarFilasDeUsuarios);

    contenidoTabla.innerHTML = contenido.join('');
}
