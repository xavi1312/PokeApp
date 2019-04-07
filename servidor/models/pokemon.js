const mongoose = require('mongoose');
const { Schema } = mongoose;

const PokemonSchema = new Schema ({
    "pos_pokedex": {type: String, required: true},
    "name"       : {type: String, required: true},
    "height"     : {type: Number, required: true},
    "weight"     : {type: Number, required: true},
    "color"      : {type: String, required: true},
    "sprite"     : {type: String, required: true},
    "hp"         : {type: Number, required: true},
    "attack"     : {type: Number, required: true},
    "defense"    : {type: Number, required: true},
    "speed"      : {type: Number, required: true},
    "types"      : [String],
});

module.exports = mongoose.model('Pokemon', PokemonSchema);