import './Pokemon.css'

const Pokemon = ({name, url, selected, selector}) => {
    
    return  <button className={'pokemon ' + (selected ? 'pokemon--selected' : '')} 
                    onClick={event => { event.preventDefault(); selector(); }}>
                <h3 className='pokemon__name'>{name}</h3>

            </button>
}

export default Pokemon;