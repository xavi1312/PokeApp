const mongoose = require('mongoose');
const URI = 'mongodb://localhost/pokemons';

mongoose.connect(URI)
    .then(db => console.log('Conectat a la Base de dades'))
    .catch(err => console.error(err));

module.exports = mongoose;