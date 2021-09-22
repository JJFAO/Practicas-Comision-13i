// Rutas para memes
const express = require('express');
const router = express.Router();
const memeControllers = require('../controllers/memeController');

router.post('/', memeControllers.crearMeme);
router.get('/', memeControllers.obtenerMemes);
router.get('/:id', memeControllers.obtenerMeme);
router.put('/:id', memeControllers.modificarMeme);
router.delete('/:id', memeControllers.borrarMeme);

module.exports = router;
