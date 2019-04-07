const Pokemon = require('../models/pokemon');

const pokemonCtrl = {};

pokemonCtrl.getPokemons = async (req, res) => {
    const pokemons = await Pokemon.find();
    res.json(pokemons);
};

pokemonCtrl.createPokemon = async (req, res) => {
    const pokemon = new Pokemon(req.body);
    await pokemon.save();
    res.json({"status": 'Pokemon gurdat'});
};

pokemonCtrl.getPokemon = async (req, res) => {
    const id = req.body.id;
    const pokemon = await Pokemon.findById(id);
    res.json(pokemon);
};

pokemonCtrl.editPokemon = async (req, res) => {
    const { id } = req.params;
    const pokemon = new PokemonClass(req.body);
    await Pokemon.findByIdAndUpdate(id, {$set: pokemon});
    res.json({status: 'Pokemon editat amb exit'});
};

pokemonCtrl.deletePokemon = async (req, res) => {
    const { id } = req.params;
    await Pokemon.findByIdAndRemove(id);
    res.json({status: 'Pokemon borrado'});
};

pokemonCtrl.getPokemonType = async (req, res) => {
    const { type } = req.params;
    const pokemons = await Pokemon.find({types: type});
    res.json(pokemons);
};

module.exports = pokemonCtrl;

class PokemonClass {
    constructor({id, name, height, weight, color, sprite, hp, attack, defense, speed, types}){
        this.id = id;
        this.name = name;
        this.height = height;
        this.weight = weight;
        this.color = color;
        this.sprite = sprite;
        this.hp = hp;
        this.attack = attack;
        this.defense = defense;
        this.speed = speed;
        this.types = types;
    }
};