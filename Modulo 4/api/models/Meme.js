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
});

module.exports = mongoose.model('Meme', MemesSchema);
