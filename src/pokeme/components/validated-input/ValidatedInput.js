import './ValidatedInput.css'

import { useState } from 'react'

/* 
    This is a wrapper around an input component which allows for validation messages to be displayed.
    It lifts the state into the parent component, because this allows for entire forms to be validated
    Instead of each input individually - then, the errors are passed down and displayed along with the component.

    Inputs:
        - Type: the type of input to display (like 'tel' or 'text')
        - Name: the user-readable name to be displayed, like 'First Name'
        - Updater: a function which is called with the new value of the input whenever it is updated
        - Value: the initial value to set - this allows for saved data to be restored
        - Errors: a list of JOI errors to display under the input
*/
const ValidatedInput = ({type, name, updater, value, errors}) => {

    // We track whether the input is modified, so the user doesn't start with a screen full of errors
    const [touched, setTouched] = useState(false);

    // When the input is changed, we make sure it is touched then update the parent
    const handleChange = event => {
        setTouched(true);
        updater(event.target.value);
    }

    return <label className='validated-input'>
        {name}
        <input className={'validated-input__input ' + (touched && errors && errors.length ? 'validated-input__input--error' : '')} 
                type={type} placeholder={name} onChange={handleChange} value={value}></input>
        {touched && errors && errors.map((error, i) => <label key={i} className='validated-input__error'>{error.message}</label>)}
    </label>
}
    
    
export default ValidatedInput;
