import './CategorySearch.css';

const CategorySearch = ({placeholder, categories}) =>
    <div className="category-search">
        <input className="category-search__query" type='search' placeholder={placeholder}></input>
        <select className="category-search__options">
            <option className='category-search__options__option'>Select Category</option>
            {categories.map(category => <option key={category}>{category}</option>)}    
        </select>
    </div>

export default CategorySearch;