const Meme = require('../models/Meme');

exports.crearMeme = async (req, res) => {
    try {
        //nuevo meme
        const meme = new Meme(req.body);
        meme.fecha = new Date();
        await meme.save();
        res.send('Meme creado');
    } catch (error) {
        console.log(error);
        res.status(400).send('Hubo un error');
    }
};

exports.obtenerMemes = async (req, res) => {
    try {
        const memes = await Meme.find();
        res.send(memes);
    } catch (error) {
        console.log(error);
        res.status(400).send('Hubo un error');
    }
};

exports.obtenerMeme = async (req, res) => {
    try {
        const meme = await Meme.findById(req.params.id);
        res.send(meme);
    } catch (error) {
        console.log(error);
        res.status(400).send('Hubo un error');
    }
};

exports.modificarMeme = async (req, res) => {
    try {
        const meme = await Meme.findById(req.params.id);
        if (req.body.hasOwnProperty('titulo')) {
            meme.titulo = req.body.titulo;
        }
        if (req.body.hasOwnProperty('imagen')) {
            meme.imagen = req.body.imagen;
        }
        await meme.save();
        res.send(meme);
    } catch (error) {
        console.log(error);
        res.status(400).send('Hubo un error');
    }
};

exports.borrarMeme = async (req, res) => {
    try {
        await Meme.findByIdAndDelete(req.params.id);
        res.send('Meme eliminado');
    } catch (error) {
        console.log(error);
        res.status(400).send('Hubo un error');
    }
};
