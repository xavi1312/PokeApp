const express = require('express');
const router = express.Router();

const pokemonCtrl = require('../controllers/pokemon.controller');

router.get('/', pokemonCtrl.getPokemons);
router.post('/', pokemonCtrl.createPokemon);
router.get('/:id', pokemonCtrl.getPokemons);
router.delete('/:id', pokemonCtrl.deletePokemon);

module.exports = router;