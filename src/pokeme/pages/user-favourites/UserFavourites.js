import './UserFavourites.css';

import { useEffect, useMemo, useState } from "react";
import { Form, useLoaderData } from "react-router-dom";
import { ActionButton, ActionLink } from "../../components/action/Action";

import CategorySearch from "../../components/category-search/CategorySearch";
import Message from "../../components/message/Message";
import Pokemon from "../../components/pokemon/Pokemon";
import { loadPokemon, loadPokemonType } from "../../loaders/Pokemon";

import { NAVIGATION_WARNING } from '../../../config/messages';

// Ideally this would be configurable through the UI
const PAGE_SIZE = 20;

/*
    This page allows the user to select their favourite pokemon - it fetches data both before and during
    The activity and only allows the user to proceed once they have chosen a pokemon.
*/
const UserFavourites = () => {
    const { pokemonTypes } = useLoaderData();
    const { types: availableTypes, error: typeLoadError } = pokemonTypes; 
    const [pokemonLoadError, setPokemonLoadError] = useState(false);

    const [searchInput, setSearchInput] = useState({term: '', category: 'Select Category'});
    const [selectedPokemon, setSelectedPokemon] = useState('');
    const [allAvailablePokemon, setAllAvailablePokemon] = useState([]);
    const [pokemonOfType, setPokemonOfType] = useState([]);

    const [errorMessage, setErrorMessage] = useState('');

    // This could be inlined, I just refactored it so the returned value isn't too messy
    const selectPokemon = (url) => setSelectedPokemon(selectedPokemon === url ? '' : url);
    const thereIsAnError = () => pokemonLoadError || typeLoadError;
    const updateSearch = newValue => setSearchInput({...searchInput, ...newValue});

    // I don't like this because it's an O(n) search for every pokemon, but I don't have enough time to optimize it
    const filteredPokemon = () => 
        allAvailablePokemon.filter(pokemon => (pokemonOfType.includes(pokemon.name) || searchInput.category === 'Select Category') && 
            pokemon.name.includes(searchInput.term)).slice(0, PAGE_SIZE);

    // We load the entire list of pokemon only once because I couldn't find a way to filter the API by name
    // It's about 80kb so not the end of the world, but I still feel a bit bad about the solution
    useMemo(async () => {
        const {pokemon, error} = await loadPokemon();
        if(!error) {
            setAllAvailablePokemon(pokemon);
            setPokemonOfType(pokemon);
        } else {
            setAllAvailablePokemon([]);
            setPokemonLoadError(error);
        }
    }, []);

    // Every time the search input changes or the user makes a selection, 
    // We want to get a list of pokemon of the selected type and save the user's progress.
    useEffect(() => {
        // Update the set of pokemon the user could select from - there seem to be less than 200 per type on average which is not too bad to load
        // It would be best to cache the list of pokemon of each type but I'm short of time
        // Also, it would make sense to implement a rate limit (i.e. make a call at most every 300ms or so to prevent API overload)
        const updateAvailablePokemon = async () => {
            const {error, type} = await loadPokemonType(searchInput.category);
            if(!error && type?.pokemon) {
                setPokemonOfType(type.pokemon.map(pokemon => pokemon.pokemon.name));
            } else {
                setErrorMessage('Could not load a list of pokemon of the selected type - filter results may be inaccurate');
            }
        }

        if(searchInput.category && searchInput.category !== 'Select Category') {
            console.log(searchInput.category);
            updateAvailablePokemon();
        } else {
            setPokemonOfType([]);
        }

        // We save the user's selection so that they can return to it even without submitting the form 
        try {
            sessionStorage.setItem('user-favourites', JSON.stringify({search: searchInput, pokemon: selectedPokemon}));
        } catch(exception) {
            // If the user's progress could not be saved, we make sure to show the corresponding message
            setErrorMessage(NAVIGATION_WARNING);
        }
    }, [searchInput, selectedPokemon]);

    return <>
        <h1 className="title title--small">Select Favourite Pokémon</h1>
        <p className="description">Search for your favourite pokémon by name and type, then select it to continue.</p>
        <Form method="post">
            <CategorySearch placeholder={'Pokémon Name'} categories={typeLoadError ? [] : availableTypes} updateFunction={updateSearch} value={searchInput}/>
            
            {/* If all pokemon were loaded without error, display them in a grid of search results */}
            {!thereIsAnError() && 
                <section className="search-results">
                    {allAvailablePokemon.length > 0 && filteredPokemon().map(pokemon => 
                            <Pokemon key={pokemon.url} selected={pokemon.url === selectedPokemon} selector={() => selectPokemon(pokemon.url)} {...pokemon}/>) }
                </section>
            }

            {/* If there was no error but there are also no search results, display a simple text */}
            {(!thereIsAnError() && filteredPokemon().length === 0) && 
                    <p className="status-text">There are no pokémon matching the current search parameters.</p>}
            
            {/* If there is an error, display a message with the details */}
            {(thereIsAnError() || errorMessage) &&
                <Message type='error'>{errorMessage || 'There was an error loading a list of pokemon from the API'}</Message>
            }

            {/* Row of buttons for navigation */}
            <div className="row pushed-to-sides">
                <ActionLink to={'/user/details'} className='action--secondary'>Back</ActionLink>
                <ActionButton enabled={selectedPokemon}>Next</ActionButton>
            </div>
        </Form>
    </>
}

export default UserFavourites;