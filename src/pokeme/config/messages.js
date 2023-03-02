// The purpose of this file is to collect messages used multiple times in one place
// This makes changes reflect through the whole app and also makes internationalization easier, 
// Though this app would require significant effort on that front 

const TITLE = "PokéMe";

const NAVIGATION_WARNING = 
    `   Your selection could not be saved to session storage either due to a lack of space or permissions. 
        If you navigate away from this page, your progress will be lost.`;

const REQUEST_ERROR_MESSAGES = {
    0: `The request to fetch data failed, which could be caused by a CORS issue or faulty internet connection.`,
    400: `This request to fetch data failed because it was not formatted correctly - this is likely due to the parameters being passed wrong from my end, sorry!`,
    404: `The request to fetch data failed, because the resource was not found on the server - this is probably because I messed up the request URL`,
    500: `The request to fetch data failed, because an internal error occured on the destination server - I recommend waiting a while until they fit it, then try again`,
}

const REQUEST_FAILED = 'The request to fetch data failed with status ';

const DEVELOPER = 'This site was developed by David Reti from ';

const CREDITS = 'Credit to Three-shots from Pexels for the background image. Thanks!'

const DEFAULT_CATEGORY = 'Select Category';

const POKEMON_TYPES_LOAD_ERROR = 'Could not load a list of pokemon of the selected type - filter results may be inaccurate.';

const POKEMON_LIST_LOAD_ERROR = 'There was an error loading a list of pokemon from the API';

const ROOT_TITLE = 'Welcome!';

const ROOT_DESCRIPTION = `  This is a simple web app to gather some input from the user and help them select their favourite Pokémon - 
                            it will work on computers and phones, saving the user's preferences to their local device.`;

const ROOT_ACTION = "Let's Get Started";

const USER_DETAILS_TITLE = 'User Details';

const USER_DETAILS_DESCRIPTION = ' We will start by gathering some basic information about you - all these data stay on your device and all fields are required.';

const FAVOURITES_TITLE = 'Favourite Pokémon';

const FAVOURITES_DESCRIPTION = 'Search for your favourite pokémon by name and type, then select it to continue.';

const SUBMIT_TITLE = 'Review Submission';

const SUBMIT_DESCRIPTION = 'Here you can view the data which will be submitted and go back to any previous page to enter or change it.';

const ERROR_TITLE = 'Unfortunately, an error has occured';

const ERROR_DESCRIPTION = "This is likely because you are trying to access a URL which doesn't exist, or a required component failed to load.";

const NO_MATCHING_POKEMON = 'There are no pokémon matching the current search parameters.';

const FIRST_NAME = 'first name';

const LAST_NAME = 'last name';

const ADDRESS = 'address';

const PHONE_NUMBER = 'phone number';

const BACK = 'Back';

const NEXT = 'Next';

const SUBMIT = 'Submit';

const BACK_TO_ROOT = 'Back to Root';

const INVALID_USER_DETAILS = 'User details are invalid or missing';

const INVALID_POKEMON = 'A pokémon still needs to be selected';

export {    TITLE,
            ROOT_TITLE,
            USER_DETAILS_TITLE,
            FAVOURITES_TITLE,
            SUBMIT_TITLE,
            ROOT_DESCRIPTION,
            USER_DETAILS_DESCRIPTION,
            FAVOURITES_DESCRIPTION,
            SUBMIT_DESCRIPTION, 
            ROOT_ACTION,
            ERROR_TITLE,
            ERROR_DESCRIPTION,
            NAVIGATION_WARNING, 
            REQUEST_ERROR_MESSAGES, 
            REQUEST_FAILED,
            DEVELOPER,
            CREDITS,
            DEFAULT_CATEGORY,
            POKEMON_TYPES_LOAD_ERROR,
            POKEMON_LIST_LOAD_ERROR,
            NO_MATCHING_POKEMON,
            FIRST_NAME,
            LAST_NAME,
            ADDRESS,
            PHONE_NUMBER,
            BACK,
            NEXT,
            SUBMIT,
            BACK_TO_ROOT,
            INVALID_USER_DETAILS,
            INVALID_POKEMON };