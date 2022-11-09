const mongoose = require('mongoose');
require('dotenv').config();
// mongoose.connect(process.env.MONGODB_URI, { 
//     //useCreateIndex: true,
//     // useNewUrlParser: true,
//     //useFindAndModify: false
//     useNewUrlParser: true,
//       useUnifiedTopology: true,

// })
// .then(db => console.log('DB esta Conectado'))
// .catch(err => console.error(err));

(async () => {
    try{
        const db = await mongoose.connect(process.env.MONGODB_URI);
        console.log('BD concectado')
    } catch (error) {
        console.error(error)
    }
})();