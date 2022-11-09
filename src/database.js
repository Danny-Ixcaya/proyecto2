const mongoose = require('mongoose');
mongoose.connect('mongodb+srv://basedos:Base1234Datos@cluster0.goeh8jl.mongodb.net/test', { 
    //useCreateIndex: true,
    useNewUrlParser: true,
    //useFindAndModify: false
})
.then(db => console.log('DB esta Conectado'))
.catch(err => console.error(err));