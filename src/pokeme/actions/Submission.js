import { redirect } from "react-router-dom";
import { MOCK_API_URL } from "../config/urls";
import { loadUserData, loadUserFavourites } from "../loaders/UserData";

const AttemptSubmission = async () => {
    const response = await fetch(MOCK_API_URL, 
        {
            method: 'POST',  
            body: JSON.stringify({'user-details': loadUserData(), 'user-favourites': (await loadUserFavourites())})
        });
    if(response.ok) {
        return redirect('/submission/success');
    }
    return null;
}

export default AttemptSubmission;