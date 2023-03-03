// The purpose of this file is to collect messages used multiple times in one place
// This makes changes reflect through the whole app and also makes internationalization easier, 
// Though this app would require significant effort on that front 

// Titles
const TITLE = "PokéMe";
const ROOT_TITLE = 'Welcome!';
const ERROR_TITLE = 'Unfortunately, an error has occured';
const SUBMIT_TITLE = 'Review Submission';
const FAVOURITES_TITLE = 'Favourite Pokémon';
const USER_DETAILS_TITLE = 'User Details';

// Descriptions
const ROOT_DESCRIPTION = `  This is a simple web app to gather some input from the user and help them select their favourite Pokémon - 
                            it will work on computers and phones, sending the user's preferences to a mock API.`;
const ERROR_DESCRIPTION = "This is likely because you are trying to access a URL which doesn't exist, or a required component failed to load.";
const SUBMIT_DESCRIPTION = 'Here you can view the data which will be submitted and go back to any previous page to enter or change it.';
const FAVOURITES_DESCRIPTION = 'Search for your favourite pokémon by name and type, then select it to continue.';
const USER_DETAILS_DESCRIPTION = ' We will start by gathering some basic information about you - all fields are required and will not be stored on the backend.';

// UI Elements
const BACK = 'Back';
const NEXT = 'Next';
const SUBMIT = 'Submit';
const ROOT_ACTION = "Let's Get Started";
const BACK_TO_ROOT = 'Back to Root';
const DEFAULT_CATEGORY = 'Select Category';

// Errors
const REQUEST_FAILED = 'The request to fetch data failed with status ';
const INVALID_POKEMON = 'A pokémon still needs to be selected';
const NAVIGATION_WARNING = 
    `   Your selection could not be saved to session storage either due to a lack of space or permissions. 
        If you navigate away from this page, your progress will be lost.`;
const NO_MATCHING_POKEMON = 'There are no pokémon matching the current search parameters.';
const INVALID_USER_DETAILS = 'User details are invalid or missing';
const POKEMON_LIST_LOAD_ERROR = 'There was an error loading a list of pokemon from the API';
const POKEMON_TYPES_LOAD_ERROR = 'Could not load a list of pokemon of the selected type - filter results may be inaccurate.';

const REQUEST_ERROR_MESSAGES = {
    0: `The request to fetch data failed, which could be caused by a CORS issue or faulty internet connection.`,
    400: `This request to fetch data failed because it was not formatted correctly - this is likely due to the parameters being passed wrong from my end, sorry!`,
    404: `The request to fetch data failed, because the resource was not found on the server - this is probably because I messed up the request URL`,
    500: `The request to fetch data failed, because an internal error occured on the destination server - I recommend waiting a while until they fit it, then try again`,
}

// Success
const SUCCESS = 'Success';
const SUCCESS_MESSAGE = 'Your form has been successfully submitted to the mock API';

// Labels
const ADDRESS = 'address';
const CREDITS = 'Credit to Three-shots from Pexels for the background image. Thanks!'
const DEVELOPER = 'This site was developed by David Reti from ';
const LAST_NAME = 'last name';
const FIRST_NAME = 'first name';
const PHONE_NUMBER = 'phone number';

export {    
    // Titles
    TITLE,
    ROOT_TITLE,
    ERROR_TITLE,
    SUBMIT_TITLE,
    FAVOURITES_TITLE,
    USER_DETAILS_TITLE,

    // Descriptions
    ROOT_DESCRIPTION,
    ERROR_DESCRIPTION,
    SUBMIT_DESCRIPTION,
    FAVOURITES_DESCRIPTION,
    USER_DETAILS_DESCRIPTION,
    
    // UI Elements
    BACK,
    NEXT,
    SUBMIT,
    ROOT_ACTION,
    BACK_TO_ROOT,
    DEFAULT_CATEGORY,

    // Errors
    REQUEST_FAILED,
    INVALID_POKEMON,
    NAVIGATION_WARNING,
    NO_MATCHING_POKEMON, 
    INVALID_USER_DETAILS,
    REQUEST_ERROR_MESSAGES,
    POKEMON_LIST_LOAD_ERROR,
    POKEMON_TYPES_LOAD_ERROR,
    
    // Success
    SUCCESS_MESSAGE,

    // Labels 
    ADDRESS,
    CREDITS,
    SUCCESS,
    DEVELOPER,
    LAST_NAME,
    FIRST_NAME,
    PHONE_NUMBER,
};