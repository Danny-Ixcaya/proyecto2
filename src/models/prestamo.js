const { Schema, model } = require('mongoose');

const prestamoSchema = new Schema({
    nombre: {
        type: String,
        require: true
    },
    cantidad:{
        type: Number,
        require: true
    },
    interes: {
        type: Number,
        require: true
    },
    tiempo: {
        type: Number,
        require: true
    },

    },


    {
        timestamps: true,
        versionkey: false
    }
);

module.exports = model('Prestamo', prestamoSchema);