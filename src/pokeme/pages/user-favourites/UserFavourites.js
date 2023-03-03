import './UserFavourites.css';

import { useEffect, useMemo, useState } from "react";
import { Form, useLoaderData } from "react-router-dom";

import { loadPokemon, loadPokemonType } from "../../loaders/Pokemon";

import Card from '../../components/card/Card';
import Message from "../../components/message/Message";
import Pokemon from "../../components/pokemon/Pokemon";
import NavigationRow from '../../components/navigation-row/NavigationRow';
import CategorySearch from "../../components/category-search/CategorySearch";

import { PAGE_SIZE } from '../../config/preferences';
import {
    FAVOURITES_DESCRIPTION, 
    FAVOURITES_TITLE, 
    NAVIGATION_WARNING, 
    NO_MATCHING_POKEMON, 
    POKEMON_LIST_LOAD_ERROR, 
    POKEMON_TYPES_LOAD_ERROR,
    DEFAULT_CATEGORY } from '../../config/messages';

/*
    This page allows the user to select their favourite pokemon - it fetches data both before and during
    The activity and only allows the user to proceed once they have chosen a pokemon.
*/
const UserFavourites = () => {
    const { pokemonTypes, userFavourites } = useLoaderData();
    const { types: availableTypes, error: typeLoadError } = pokemonTypes; 
    const [pokemonLoadError, setPokemonLoadError] = useState(false);

    const [searchInput, setSearchInput] = useState({
        term: userFavourites?.search?.term || '', 
        category: userFavourites?.search?.category || DEFAULT_CATEGORY
    });
    const [selectedPokemon, setSelectedPokemon] = useState(userFavourites.pokemon || '');
    const [allAvailablePokemon, setAllAvailablePokemon] = useState([]);
    const [pokemonOfType, setPokemonOfType] = useState([]);

    const [errorMessage, setErrorMessage] = useState('');

    const thereIsAnError = pokemonLoadError || typeLoadError || errorMessage;

    // This could be inlined, I just refactored it so the returned value isn't too messy
    const selectPokemon = (url) => setSelectedPokemon(selectedPokemon === url ? '' : url);
    const updateSearch = newValue => setSearchInput({...searchInput, ...newValue});

    // I don't like this because it's an O(n) search for every pokemon, but I don't have enough time to optimize it
    const filteredPokemon = () => 
        allAvailablePokemon.filter(pokemon => (pokemonOfType.includes(pokemon.name) || searchInput.category === DEFAULT_CATEGORY) && 
            pokemon.name.toUpperCase().includes(searchInput.term.toUpperCase())).slice(0, PAGE_SIZE);

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
        // Also, it would make sense to implement a rate limit (i.e. make a call at most every 300ms or so to prevent excessive API traffic)
        const updateAvailablePokemon = async () => {
            const {error, type} = await loadPokemonType(searchInput.category);
            if(!error && type?.pokemon) {
                setPokemonOfType(type.pokemon.map(pokemon => pokemon.pokemon.name));
            } else {
                setErrorMessage();
            }
        }

        // If the search category is different from the default, load the list of available pokemon for the given type
        if(searchInput.category && searchInput.category !== DEFAULT_CATEGORY) 
            updateAvailablePokemon(POKEMON_TYPES_LOAD_ERROR);

        // We save the user's selection so that they can return to it even without submitting the form 
        try {
            sessionStorage.setItem('user-favourites', JSON.stringify({search: searchInput, pokemon: selectedPokemon}));
        } catch(exception) {
            // If the user's progress could not be saved, we make sure to show the corresponding message
            setErrorMessage(NAVIGATION_WARNING);
        }
    }, [searchInput, selectedPokemon]);

    return (
        <Card title={FAVOURITES_TITLE} description={FAVOURITES_DESCRIPTION}>
            <Form method="post">
                <CategorySearch placeholder={'Pokémon Name'} categories={typeLoadError ? [] : availableTypes} updateFunction={updateSearch} value={searchInput}/>
                
                {/* If all pokemon were loaded without error, display them in a grid of search results */}
                {!thereIsAnError && 
                    <section className="search-results">
                        {allAvailablePokemon.length > 0 && filteredPokemon().map(pokemon => 
                                <Pokemon key={pokemon.url} selected={pokemon.url === selectedPokemon} selector={url => selectPokemon(url)} {...pokemon}/>) }
                    </section>
                }

                {/* If there was no error but there are also no search results, display a simple text */}
                {(!thereIsAnError && filteredPokemon().length === 0) && 
                        <p className="status-text">{NO_MATCHING_POKEMON}</p>}
                
                {/* If there is an error, display a message with the details */}
                {thereIsAnError &&
                    <Message type='error'>{errorMessage || POKEMON_LIST_LOAD_ERROR}</Message>
                }

                <NavigationRow backLink='/user/details' enabled={selectedPokemon}/>
            </Form>
        </Card>
    );
}

export default UserFavourites;