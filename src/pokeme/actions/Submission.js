import { redirect } from "react-router-dom";
import { MOCK_API_URL } from "../config/urls";
import { loadUserData, loadUserFavourites } from "../loaders/UserData";

const AttemptSubmission = async () => {
    const response = await fetch(MOCK_API_URL, 
        {
            method: 'POST',  
            body: {'user-details': loadUserData(), 'user-favourites': loadUserFavourites()} 
        });
    if(response.ok) {
        return redirect('/submission/success');
    }
}

export default AttemptSubmission;