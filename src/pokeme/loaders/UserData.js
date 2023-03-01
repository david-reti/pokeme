const loadUserData = () => {
    return sessionStorage.getItem('user-details') || {};
}

const loadUserFavourites = () => {

}

export { loadUserData, loadUserFavourites };