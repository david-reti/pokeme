import './Card.css';

/*  This is a generic card component with a title and description that forms the basis for most pages
    It is also useful as a container for groups of other related elements.

    Inputs:
        title: A string representing the title to display on the card
        description: A string containing a description to display under the title - this is not required
        titleSize: Customise the size of the title, can be 'small', 'medium', or 'large' - default medium
        bordered: A boolean indicated whether the card should have a border around it - default false
*/
const Card = ({title, children, description = '', titleSize = 'medium', bordered = false}) =>
    <div className={"card " + (bordered ? 'card--bordered' : '')}>
        <h1 className={`title title--${titleSize}`}>{title}</h1>
        {description && <p className="description">{description}</p>}
        {children}
    </div>


export default Card;