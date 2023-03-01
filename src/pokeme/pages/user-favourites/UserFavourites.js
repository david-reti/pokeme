import './UserFavourites.css';

import { useEffect, useState } from "react";
import { Form, useLoaderData } from "react-router-dom";
import { ActionButton, ActionLink } from "../../components/action/Action";

import CategorySearch from "../../components/category-search/CategorySearch";
import Message from "../../components/message/Message";
import Pokemon from "../../components/pokemon/Pokemon";
import { loadPokemon } from "../../loaders/Pokemon";

/*
    This page allows the user to select their favourite pokemon - it fetches data both before and during
    The activity and only allows the user to proceed once they have chosen a pokemon.
*/
const UserFavourites = () =>
{
    const { pokemonTypes } = useLoaderData();
    const { types: availableTypes, error: typeLoadError } = pokemonTypes; 
    const [pokemonLoadError, setPokemonLoadError] = useState(false);

    const [searchInput, setSearchInput] = useState({});
    const [selectedPokemon, setSelectedPokemon] = useState('');
    const [availablePokemon, setAvailablePokemon] = useState([]);

    // This could be inlined, I just refactored it so the returned value isn't too messy
    const selectPokemon = (url) => setSelectedPokemon(selectedPokemon === url ? '' : url);
    const thereIsAnError = () => pokemonLoadError || typeLoadError;

    useEffect(() => {
        const updatePokemonSearch = async() => {
            const {pokemon, error} = (await loadPokemon());
            if(!error) {
                setAvailablePokemon(pokemon);
            } else {
                setAvailablePokemon([]);
                setPokemonLoadError(error);
            }
        }
        updatePokemonSearch();
    }, [searchInput]);

    return <>
        <h1 className="title title--small">Select Favourite Pokémon</h1>
        <p className="description">Search for your favourite pokémon by name and type, then select it to continue.</p>
        <Form method="post">
            <CategorySearch placeholder={'Pokémon Name'} categories={typeLoadError ? [] : availableTypes}/>
            {!thereIsAnError() && 
                <section className="search-results">
                    {availablePokemon.length > 0 && 
                        availablePokemon.map(pokemon => 
                            <Pokemon key={pokemon.url} selected={pokemon.url === selectedPokemon} selector={() => selectPokemon(pokemon.url)} {...pokemon}/>) }
                </section>
            }
            {(!thereIsAnError() && availablePokemon.length === 0) && 
                    <p className="status-text">There are no pokémon matching the current search parameters.</p>}
            
            {thereIsAnError() && 
                <Message type='error'>
                    The list of pokémon {typeLoadError ? 'types' : ''} could not be loaded: {typeLoadError || pokemonLoadError}
                </Message>
            }
            <div className="row pushed-to-sides">
                <ActionLink to={'/user/details'} className='action--secondary'>Back</ActionLink>
                <ActionButton enabled={selectedPokemon}>Next</ActionButton>
            </div>
        </Form>
    </>
}

export default UserFavourites;