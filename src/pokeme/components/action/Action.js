import './Action.css';
import { Link } from 'react-router-dom';

const ActionLink = ({to, children}) =>
    <div className='row'>
        <Link to={to} className='action'>{children}</Link>
    </div>

const ActionButton = ({children}) =>
    <div className='row'>
        <button className='action'>{children}</button>
    </div>

export { ActionLink, ActionButton };