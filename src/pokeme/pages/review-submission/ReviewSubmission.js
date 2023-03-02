import NavigationRow from "../../components/navigation-row/NavigationRow";

import { 
    FAVOURITES_TITLE, 
    SUBMIT, 
    SUBMIT_DESCRIPTION, 
    SUBMIT_TITLE, 
    USER_DETAILS_TITLE } from "../../../config/messages";

const ReviewSubmission = () =>
    <>
        <h1 className="title title--small">{SUBMIT_TITLE}</h1>
        <p className="description">{SUBMIT_DESCRIPTION}</p>

        <div className="card">
            <h3>{USER_DETAILS_TITLE}</h3>
        </div>

        <div className="card">
            <h3>{FAVOURITES_TITLE}</h3>
        </div>

        <NavigationRow backLink='/user/favourites' actionText={SUBMIT}/>
    </>

export default ReviewSubmission;