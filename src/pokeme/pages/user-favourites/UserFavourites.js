import { Form, useLoaderData } from "react-router-dom";
import { ActionButton, ActionLink } from "../../components/action/Action";

import CategorySearch from "../../components/category-search/CategorySearch";

/*
    This page allows the user to select their favourite pokemon - it fetches data both before and during
    The activity and only allows the user to proceed once they have chosen a pokemon.
*/
const UserFavourites = () =>
{
    const { pokemonTypes } = useLoaderData();

    return <>
        <h1 className="title title--small">Select Favourite Pokémon</h1>
        <p className="description">Search for your favourite pokémon by name and type, then select it to continue.</p>
        <Form method="post">
            <CategorySearch placeholder={'Pokémon Name'} categories={pokemonTypes || {}}/>
            <div className="row pushed-to-sides">
                <ActionLink to={'/user/details'} className='action--secondary'>Back</ActionLink>
                <ActionButton>Next</ActionButton>
            </div>
        </Form>
    </>
}

export default UserFavourites;