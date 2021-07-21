function buscarUsuario(event) {
    event.preventDefault();
    const busquedaInput = document.getElementById('busqueda');
    console.log(busquedaInput.value);
    function usuariosFilter(usuario) {
        return usuario.nombre.includes(busquedaInput.value);
    }
    const usuariosFiltrados = usuarios.filter(usuariosFilter);

}
