import { REQUEST_ERROR_MESSAGES } from "../../util/requestErrorMessages";

/* 
    This is a generic function for fetching resources from the PokeAPI.

    If the request is successful, an object is returned with:
        - error set to a blank string.
        - resource set to the results from the response body.

    If the request fails, then the resource will be an empty object and error will contain a string describing the error
*/
const fetchFromPokeAPI = async resource => {
    try {
        const response = await fetch(`https://pokeapi.co/api/v2/${resource}`);
        if(response.ok === false) {
            return { error: REQUEST_ERROR_MESSAGES[response.status] || `The request to fetch data failed with status ${response.status} `, resource: {}};
        }
        return { error: '', resource: (await response.json())};
    } catch(error) {
        return {error: REQUEST_ERROR_MESSAGES[0], resource: {}};
    }
}

// Function to fetch a list of strings representing pokemon types
const loadPokemonTypes = async () => {
    const {error, resource} = await fetchFromPokeAPI('type');
    if(!error) {
        return {error: '', types: resource.results.map(result => result.name)};
    }
    return {error: error, types: []};
}

// Function to fetch a list of objects representing pokemon properties
const loadPokemon = async () => {
    const {error, resource} = await fetchFromPokeAPI('pokemon');
    if(!error) {
        return {error: '', pokemon: resource.results};
    }
    return {error: error, pokemon: []};
}

export { loadPokemonTypes, loadPokemon };