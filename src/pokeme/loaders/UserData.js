const loadUserData = () => {
    return sessionStorage.getItem('user-details') || {};
}

const loadUserFavourites = () => {
    return {
        pokemonTypes: [] 
    };
}

export { loadUserData, loadUserFavourites };