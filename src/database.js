const mongoose = require('mongoose');
require('dotenv').config();
mongoose.connect(process.env.MONGODB_URI, { 
    //useCreateIndex: true,
    // useNewUrlParser: true,
    //useFindAndModify: false
    useNewUrlParser: true,
      useUnifiedTopology: true,

})
.then(db => console.log('DB esta Conectado'))
.catch(err => console.error(err));

// mongoose.connect(
//     process.env.MONGODB_URI || 'mongodb+srv://basedos:Base1234Datos@cluster0.goeh8jl.mongodb.net/test',
//     {
    //   useNewUrlParser: true,
    //   useUnifiedTopology: true,
    //   useCreateIndex: true,
    //   useFindAndModify: false,
//     },
//   );