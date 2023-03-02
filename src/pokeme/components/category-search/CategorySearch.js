import './CategorySearch.css';

import { DEFAULT_CATEGORY } from '../../config/messages';

/*
    This is a composite input type which allows for both a search phrase and a category to be collected
    It calls a function every time one of the inputs changes, which allows for the parent to be updated.

    Inputs:
        -   placeholder: the placeholder text to show in the search component
        -   categories: an array of strings representing the categories that can be chosen from
        -   updateFunction: a callback function that will be called on every change - should take an object containing
            one of two elements: either term and category - this is then merged to create the overall state.
*/
const CategorySearch = ({placeholder, categories, value, updateFunction}) =>
    <div className="category-search">
        <input className="category-search__query" type='search' value={value.term} placeholder={placeholder} onChange={event => updateFunction({term: event.target.value})}></input>
        <select className="category-search__options" value={value.category} onChange={event => updateFunction({category: event.target.value})}>
            <option className='category-search__options__option'>{DEFAULT_CATEGORY}</option>
            {categories.map(category => <option key={category}>{category}</option>)}    
        </select>
    </div>
    

export default CategorySearch;