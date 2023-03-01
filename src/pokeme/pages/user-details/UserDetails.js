import './UserDetails.css';
import Joi from "joi";
import { useEffect, useState } from "react";
import { Form, useLoaderData } from "react-router-dom";

import { ActionButton, ActionLink } from "../../components/action/Action";
import ValidatedInput from "../../components/validated-input/ValidatedInput";

const USER_DETAILS_SCHEMA = Joi.object({
    'First Name': Joi.string().alphanum().min(2).max(128).required(),
    'Last Name': Joi.string().alphanum().min(2).max(128).required(),
    
    // This type of input will validate both US / Canadian and international phone numbers, but the regex is a bit messy
    'Phone Number': Joi.string().min(10).pattern(/^(\+0?1\s)?\(?\d{3}\)?[\s.-]\d{3}[\s.-]\d{4}$/, 'phone number').required(),
        
    // It would be best to split this between multiple elements in a production setting
    // As I would like to keep to the project requirements, I'm only doing basic checks to allow for flexibility
    'Address': Joi.string().alphanum().min(2).max(256).required()    
});

/*
    This page includes a form for gathering information about the user. It automatically validates
    The form every time a change is made to it and persists changes in case the user wants to come back
    And continue it later.
*/
const UserDetails = () => {
    const userData = useLoaderData();

    const [valid, setValid] = useState(false);
    
    const [address, setAddress] = useState(userData['Address'] || '');
    const [lastName, setLastName] = useState(userData['Last Name'] || '');
    const [firstName, setFirstName] = useState(userData['First Name'] || '');
    const [telephoneNumber, setTelephoneNumber] = useState(userData['Phone Number'] || '');

    const [fieldErrors, setFieldErrors] = useState({});

    const [showNavigationMessage, setShowNavigationMessage] = useState(false);

    // Every time one of the form fields is updated, we validate the form and save the user's progress
    useEffect(() => {
        // We start by collecting the values for all the form elements
        const newValues = { 'First Name': firstName, 
                            'Last Name': lastName, 
                            'Phone Number': telephoneNumber, 
                            'Address': address };

        // Get an array of errors associated with the form fields
        const { error } = USER_DETAILS_SCHEMA.validate(newValues, {abortEarly: false});
        
        // If there are errors, update the error state and form validity
        setFieldErrors(error ? {
            firstName: error.details.filter(error => error.context.key === 'First Name'),
            lastName: error.details.filter(error => error.context.key === 'Last Name'),
            phoneNumber: error.details.filter(error => error.context.key === 'Phone Number'),
            address: error.details.filter(error => error.context.key === 'Address')
        } : {});
        setValid(!error);
        
        // Finally, we try to save the user's progress to session storage - the reason we do it here is so that progress is saved
        // Even when the user navigates away from the page. 
        try {
            sessionStorage.setItem('user-details', JSON.stringify(newValues));
        } catch(exception) {
            // If the user's progress could not be saved, we make sure to show a message
            setShowNavigationMessage(true);
        }
    }, [firstName, lastName, telephoneNumber, address, valid]);

    return <>
        <h2 className="title title--small">User Details</h2>
        <p className="description">
            We will start by gathering some basic information about you - all these data stay on your device and all fields are required.
        </p>
        <Form method="post">
            <div className='user-details-form__inputs'>
                <ValidatedInput type={'text'} name='First Name' updater={setFirstName} value={firstName} errors={fieldErrors.firstName}/>
                <ValidatedInput type={'text'} name='Last Name' updater={setLastName} value={lastName} errors={fieldErrors.lastName}/>
                <ValidatedInput type={'tel'} name='Phone Number' updater={setTelephoneNumber} value={telephoneNumber} errors={fieldErrors.phoneNumber}/>
                <ValidatedInput type={'text'} name='Address' updater={setAddress} value={address} errors={fieldErrors.address}/>
            </div>
            {showNavigationMessage && <div className='user-details-form__info'> 
                Form progress could not be saved, and will be lost when you navigate away from this page.</div>}
            <div className='row pushed-to-sides'>
                <ActionLink to={'/'} className='action--secondary'>Back</ActionLink>
                <ActionButton enabled={valid}>Next</ActionButton>
            </div>
        </Form>
    </>
}

export default UserDetails;