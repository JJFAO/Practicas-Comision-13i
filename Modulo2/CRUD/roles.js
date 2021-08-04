const nuevoRolInput = document.getElementById('nuevoRol');
const listaRolesUl = document.getElementById('listaRoles');

// Traer de localStorage el dato asociado a la key "roles".
// Convertir datos en formato JSON a código JavaScript.
let roles = JSON.parse(localStorage.getItem('roles')) || [];

const agregarRol = (event) => {
    event.preventDefault();
    roles.push(nuevoRolInput.value);

    // Convertir datos al formato JSON.
    // Guardar en localStorage un dato asociado a la key "roles".
    localStorage.setItem('roles', JSON.stringify(roles));
    mostrarRoles();
};

const mostrarRoles = () => {
    // Cargar los roles en el listado(ul)
    const contenido = roles.map(
        (rol) => `
        <li>
            <span style="min-width: 150px; display: inline-block">${rol}</span>
            <button onclick="eliminarRol('${rol}')" class="btn btn-danger">Eliminar</button>
        </li>
        `
    );
    listaRolesUl.innerHTML = contenido.join('');

    //Cargar los roles en los select de roles.
    const options = roles.map((rol) => `<option>${rol}</option>`);
    options.unshift('<option></option>');
    const optionsJoin = options.join('');
    rolInput.innerHTML = optionsJoin;
    rolEditadoInput.innerHTML = optionsJoin;
};

const eliminarRol = (rol) => {
    const rolesFiltrados = roles.filter((r) => (r !== rol));
    roles = rolesFiltrados;
    localStorage.setItem('roles', JSON.stringify(roles));
    mostrarRoles();
}

mostrarRoles();
