import { REQUEST_ERROR_MESSAGES } from "../../util/requestErrorMessages";

const POKE_API_URL = 'https://pokeapi.co/api/v2'; 

/* 
    This is a generic function for fetching resources from the PokeAPI.

    If the request is successful, an object is returned with:
        - error set to a blank string.
        - resource set to the results from the response body.

    If the request fails, then the resource will be an empty object and error will contain a string describing the error
*/
const fetchFromPokeAPI = async resource => {
    try {
        const response = await fetch(resource);
        if(response.ok === false) {
            return { error: REQUEST_ERROR_MESSAGES[response.status] || `The request to fetch data failed with status ${response.status} `, resource: {}};
        }
        return { error: '', resource: (await response.json())};
    } catch(error) {
        return {error: REQUEST_ERROR_MESSAGES[0], resource: {}};
    }
}

// Function to fetch a list of strings representing pokemon types
const loadPokemonTypes = async (limit=2000) => {
    const {error, resource} = await fetchFromPokeAPI(`${POKE_API_URL}/type?limit=${limit}`);
    return {error: error, types: (resource?.results?.map(result => result.name)) || []};
}

// Function to fetch a list of objects representing the names of pokemon
const loadPokemon = async (limit=2000) => {
    const {error, resource} = await fetchFromPokeAPI(`${POKE_API_URL}/pokemon?limit=${limit}`);
    return {error: error, pokemon: resource?.results || []};
}

// Function to load details of a particular pokemon, for display
const loadPokemonDetails = async url => {
    const {error, resource} = await fetchFromPokeAPI(url);
    return {error: error, details: resource || []};
}

// Function to load the details of a given type of pokemon
const loadPokemonType = async type => {
    const {error, resource} = await fetchFromPokeAPI(`${POKE_API_URL}/type/${type}`);
    return {error: error, type: resource};
}

export { loadPokemonTypes, loadPokemon, loadPokemonType, loadPokemonDetails };
