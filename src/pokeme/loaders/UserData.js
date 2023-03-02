import { loadPokemonTypes } from "./Pokemon";

const loadUserData = () => {
    return JSON.parse(sessionStorage.getItem('user-details')) || {};
}

const loadUserFavourites = async () => {
   return {
        userFavourites: JSON.parse(sessionStorage.getItem('user-favourites')) || {},
        pokemonTypes: (await loadPokemonTypes())
   }
}

const loadDataForSubmission = () => {
    return {
        userDetails: JSON.parse(sessionStorage.getItem('user-details')) || {},
        userFavourites: JSON.parse(sessionStorage.getItem('user-favourites')) || {}
    };
}

export { loadUserData, loadUserFavourites, loadDataForSubmission };