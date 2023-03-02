import './ReviewSubmission.css';

import { Link, useLoaderData } from "react-router-dom";

import Card from "../../components/card/Card";
import Spacer from "../../components/spacer/Spacer";
import Pokemon from "../../components/pokemon/Pokemon";
import NavigationRow from "../../components/navigation-row/NavigationRow";

import { slugify } from "../../../util/utils";
import { USER_DETAILS_SCHEMA } from "../../config/validators";
import { 
    ADDRESS,
    FAVOURITES_TITLE, 
    FIRST_NAME, 
    INVALID_POKEMON, 
    INVALID_USER_DETAILS, 
    LAST_NAME, 
    PHONE_NUMBER, 
    SUBMIT, 
    SUBMIT_DESCRIPTION, 
    SUBMIT_TITLE, 
    USER_DETAILS_TITLE } from "../../config/messages";

const ReviewSubmission = () => {
    const { userDetails, userFavourites } = useLoaderData();

    const userPokemon = userFavourites?.pokemon || '';
    const userDetailsValid = !(USER_DETAILS_SCHEMA.validate(userDetails).error);

    return (
        <Card title={SUBMIT_TITLE} description={SUBMIT_DESCRIPTION}>
            {/* Card containing user details, clicking will navigate back to the user details page */}
            <Link to={'/user/details'} className='undecorate hoverable'>
                <Card title={USER_DETAILS_TITLE} titleSize='small' bordered>
                    {userDetailsValid &&
                        [FIRST_NAME, LAST_NAME, PHONE_NUMBER, ADDRESS].map(userDetail => 
                            <p key={userDetail} className='user-detail-text'>
                                <strong className="capitalise">{userDetail}</strong>: 
                                {' ' + userDetails[slugify(userDetail)]}
                            </p>
                        )
                    }
                    {!userDetailsValid && <p className="status-text">{INVALID_USER_DETAILS}</p>}
                </Card>
            </Link>

            <Spacer/>

            {/* Card containing user favourites, clicking on it will navigate the user back to the pokemon page */}
            <Link to={'/user/favourites'} className='undecorate hoverable'>
                <Card title={FAVOURITES_TITLE} titleSize='small' bordered>
                    {(userPokemon) && <Pokemon url={userPokemon}></Pokemon>}
                    {(!userPokemon) && <p className='status-text'>{INVALID_POKEMON}</p>}
                </Card>
            </Link>
            <NavigationRow backLink='/user/favourites' actionText={SUBMIT} enabled={userPokemon && userDetailsValid}/>
        </Card>
    );
}

export default ReviewSubmission;