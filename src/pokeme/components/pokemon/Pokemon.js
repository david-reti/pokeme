import './Pokemon.css'

import { useState, useEffect } from 'react';
import { loadPokemonDetails } from '../../loaders/Pokemon';

import Message from '../message/Message';

/*
    This component represents a single Pokemon - I used buttons to allow it to be selected by using tab or a screen reader
    It displays the pokemon's name, type(s) and image. Also, it can call a function when the pokemon is selected
 
    Inputs:
        - name: The name of the pokemon. If this is blank, the name will be taken from the loaded details
        - url: The url where the resource representing this specific pokemon can be found
        - selected: If this is true, the pokemon will show a 'selected' state - this is meant to be handled by the parent
        - selector: The function that is called when the user selects the pokemon - again, this helps the parent own the state
*/
const Pokemon = ({name, url, selected = false, selector = () => {}}) => {
    const [error, setError] = useState('');
    const [details, setDetails] = useState({});

    // Load the pokemon details from the api - this is used for types and image
    useEffect(() => {
        const loadDetails = async() => {
            const {error: loadError, details: loadedDetails} = await loadPokemonDetails(url);
            setDetails(loadedDetails);
            setError(loadError);
        }
        loadDetails();
    }, [url]);

    // If the selector function takes 0 arguments i.e. is invalid, make the pokemon not selectable
    return  (
        <button className={'pokemon ' + (selector.length > 0 ? 'hoverable ' : '') + 
                (selected ? 'pokemon--selected' : '')} 
                onClick={event => { event.preventDefault(); selector(url); }}>
                
                {/* The Pokemon's name and type(s) */}
                <div>
                    <h3 className='pokemon__name'>{name || details.name}</h3>
                    {(!error && details?.types) &&
                        details.types.map(type => <p key={type.type.name} className='pokemon__type'>{type.type.name}</p>)
                    }
                </div>

                {/* I generally try to avoid setting style directly, but in this case I needed to override CSS specificity */}
                {error && <Message type='error' style={{margin: 0}}>Details not loaded</Message>}
                {(!error && details?.sprites?.front_default) &&
                    <img className='pokemon__image' src={details.sprites.front_default} alt='' loading='lazy'></img>
                }
        </button>
    );
}

export default Pokemon;
