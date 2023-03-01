import './Action.css';
import { Link } from 'react-router-dom';

const ActionLink = ({to, children, className}) =>
    <Link to={to} className={'action ' + (className || '')}>{children}</Link>
    

const ActionButton = ({children, enabled, className}) =>
    <button className={'action ' + (className || '')} disabled={!enabled}>{children}</button>


export { ActionLink, ActionButton };