import Joi from "joi";
import { PHONE_VALIDATION_PATTERN } from "./patterns";
import {
    FIRST_NAME,
    LAST_NAME,
    PHONE_NUMBER,
    ADDRESS
} from './messages';

const USER_DETAILS_SCHEMA = Joi.object({
    FIRST_NAME: Joi.string().alphanum().min(2).max(128).required().label(FIRST_NAME),
    LAST_NAME: Joi.string().alphanum().min(2).max(128).required().label(LAST_NAME),
    
    // This type of input will validate both US / Canadian and international phone numbers, but the regex is a bit messy
    PHONE_NUMBER: Joi.string().min(10).pattern(PHONE_VALIDATION_PATTERN, PHONE_NUMBER).required().label(PHONE_NUMBER),
        
    // It would be best to split this between multiple elements in a production setting
    // As I would like to keep to the project requirements, I'm only doing basic checks to allow for flexibility
    ADDRESS: Joi.string().min(2).max(256).required().label(ADDRESS)
});

export { USER_DETAILS_SCHEMA };