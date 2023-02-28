import { redirect } from "react-router-dom";

const saveUserDetails = () => {
    return redirect('/user/favourites');
}

const saveUserFavourites = () => {
    return redirect('/submission');   
}

export { saveUserDetails, saveUserFavourites };