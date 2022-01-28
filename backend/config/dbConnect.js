const mongoose = require('mongoose');

const dbConnect = () => {
    mongoose.connect('mongodb+srv://msquare-2:n0RwMtBtcSKvooYa@cluster0.na948.mongodb.net/test')
    .then(()=> console.log('Db Connected'))
    .catch(err => console.log(err));
}

module.exports = dbConnect;

