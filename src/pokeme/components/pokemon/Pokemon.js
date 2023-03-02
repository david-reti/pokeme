import { useState, useEffect } from 'react';
import { loadPokemonDetails } from '../../loaders/Pokemon';
import Message from '../message/Message';
import './Pokemon.css'

const Pokemon = ({name, url, selected, selector}) => {
    const [error, setError] = useState('');
    const [details, setDetails] = useState({});

    // Load the pokemon details from the api - in practice this should only happen once
    useEffect(() => {
        const loadDetails = async() => {
            const {error: loadError, details: loadedDetails} = await loadPokemonDetails(url);
            setDetails(loadedDetails);
            setError(loadError);
        }
        loadDetails();
    }, [url]);

    return  (
        <button className={'pokemon ' + (selected ? 'pokemon--selected' : '')} onClick={event => { event.preventDefault(); selector(); }}>
                <div>
                    <h3 className='pokemon__name'>{name}</h3>
                    {(!error && details?.types) &&
                        details.types.map(type => <p className='pokemon__type'>{type.type.name}</p>)
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
