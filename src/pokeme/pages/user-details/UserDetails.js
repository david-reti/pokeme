import './UserDetails.css';
import { useEffect, useState } from "react";
import { Form, useLoaderData } from "react-router-dom";

import Card from '../../components/card/Card';
import Message from '../../components/message/Message';
import NavigationRow from '../../components/navigation-row/NavigationRow';
import ValidatedInput from "../../components/validated-input/ValidatedInput";

import { USER_DETAILS_SCHEMA } from '../../config/validators';
import { 
    NAVIGATION_WARNING, 
    USER_DETAILS_TITLE, 
    USER_DETAILS_DESCRIPTION, 
    FIRST_NAME, 
    LAST_NAME, 
    ADDRESS, 
    PHONE_NUMBER } from '../../config/messages';

/*
    This page includes a form for gathering information about the user. It automatically validates
    The form every time a change is made to it and persists changes in case the user wants to come back
    And continue it later.
*/
const UserDetails = () => {
    const userData = useLoaderData();

    const [valid, setValid] = useState(false);
    
    const [address, setAddress] = useState(userData.ADDRESS || '');
    const [lastName, setLastName] = useState(userData.LAST_NAME || '');
    const [firstName, setFirstName] = useState(userData.FIRST_NAME || '');
    const [telephoneNumber, setTelephoneNumber] = useState(userData.PHONE_NUMBER || '');

    const [fieldErrors, setFieldErrors] = useState({});

    const [showNavigationMessage, setShowNavigationMessage] = useState(false);

    // Every time one of the form fields is updated, we validate the form and save the user's progress
    useEffect(() => {
        // We start by collecting the values for all the form elements
        const newValues = { FIRST_NAME: firstName, 
                            LAST_NAME: lastName, 
                            PHONE_NUMBER: telephoneNumber, 
                            ADDRESS: address };

        // Get an array of errors associated with the form fields
        const { error } = USER_DETAILS_SCHEMA.validate(newValues, {abortEarly: false});
        
        // If there are errors, update the error state and form validity
        setFieldErrors(error ? {
            firstName: error.details.filter(error => error.context.key === 'FIRST_NAME'),
            lastName: error.details.filter(error => error.context.key === 'LAST_NAME'),
            phoneNumber: error.details.filter(error => error.context.key === 'PHONE_NUMBER'),
            address: error.details.filter(error => error.context.key === 'ADDRESS')
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

    return (
        <Card title={USER_DETAILS_TITLE} description={USER_DETAILS_DESCRIPTION}>
            <Form method="post">
                {/* User data input fields */}
                <div className='user-details-form__inputs'>
                    <ValidatedInput type={'text'} name={FIRST_NAME} updater={setFirstName} value={firstName} errors={fieldErrors.firstName}/>
                    <ValidatedInput type={'text'} name={LAST_NAME} updater={setLastName} value={lastName} errors={fieldErrors.lastName}/>
                    <ValidatedInput type={'tel'} name={PHONE_NUMBER} updater={setTelephoneNumber} value={telephoneNumber} errors={fieldErrors.phoneNumber}/>
                    <ValidatedInput type={'text'} name={ADDRESS} updater={setAddress} value={address} errors={fieldErrors.address}/>
                </div>

                {showNavigationMessage && <Message type='info'>{NAVIGATION_WARNING}</Message>}
                
                <NavigationRow backLink='/' enabled={valid}/>
            </Form>
        </Card>
    );
}

export default UserDetails;