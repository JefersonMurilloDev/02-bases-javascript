const { http } = require('../plugins');


const getPokemonById = async(id) => {
    
    const url = `https://pokeapi.co/api/v2/pokemon/${id}`;

    try {

    const pokemon = await http.get(url);

    return pokemon.name;

    } catch (err) {
        
        throw new Error(`Pokemon not found with id ${id}`);
    }   
};



module.exports = getPokemonById;