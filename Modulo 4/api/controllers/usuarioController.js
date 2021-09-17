const Usuario = require('../models/Usuario');
const bcryptjs = require('bcryptjs');
const { validationResult } = require('express-validator');

exports.crearUsuario = async (req, res) => {
    // revisamos los errores
    const errores = validationResult(req);
    if (!errores.isEmpty()) {
        return res.status(400).json({ msg: errores.array() });
    }

    const { email, password } = req.body;

    try {
        // Revisando q el email sea unico
        let usuarioEncontrado = await Usuario.findOne({ email });

        if (usuarioEncontrado) {
            return res.status(400).send('Email ya esta en uso');
        }

        let usuario;

        //nuevo usuario
        usuario = new Usuario(req.body);

        //hashear el password
        const salt = await bcryptjs.genSalt(10);
        usuario.password = await bcryptjs.hash(password, salt);

        //guardar usuario
        await usuario.save();

        //mensaje de exito
        res.send('Usuario Creado Correctamente');
    } catch (error) {
        console.log(error);
        res.status(400).send('Hubo un error');
    }
};

exports.obtenerUsuarios = (req, res) => {
    console.log('Funcion obtener usuarios');
    res.send('Lista de usuarios');
};

exports.obtenerUsuario = (req, res) => {
    console.log('Usuario encontrado', req.params);
};

exports.modificarUsuario = (req, res) => {
    console.log('Usuario encontrado', req.params);
};
exports.borrarUsuario = (req, res) => {
    console.log('Usuario encontrado para borrar', req.params);
};
