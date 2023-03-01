import { loadPokemonTypes } from "./Pokemon";

const loadUserData = () => {
    return sessionStorage.getItem('user-details') || {};
}

const loadUserFavourites = async () => {
   return {
        userFavourites: sessionStorage.getItem('user-favourites') || {},
        pokemonTypes: (await loadPokemonTypes())
   }
}

export { loadUserData, loadUserFavourites };