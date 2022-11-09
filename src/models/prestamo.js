const { Schema, model } = require('mongoose');

const prestamoSchema = new Schema({
    nombre: {
        typeof: String,
        require: true
    },
    cantidad:{
        typeof: Number,
        require: true
    },
    interes: {
        typeof: Number,
        require: true
    },
    tiempo: {
        typeof: Number,
        require: true
    },

    },


    {
        timestamps: true,
        versionkey: false
    }
);

module.exports = model('crear', crear);