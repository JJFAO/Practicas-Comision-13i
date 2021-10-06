const mongoose = require('mongoose');
const MemesSchema = mongoose.Schema({
    titulo: {
        type: String,
        required: true,
        trim: true,
    },
    imagen: {
        type: String,
        required: true,
        trim: true,
    },
    fecha: {
        type: Date,
        required: true,
    },
    creador: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Usuario',
        required: true,
    },
});

module.exports = mongoose.model('Meme', MemesSchema);
