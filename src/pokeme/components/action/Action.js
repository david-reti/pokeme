import './Action.css';

import { Link } from 'react-router-dom';

// This is a wrapper for a link in React DOM which can have custom children 
const ActionLink = ({to, children, className}) =>
    <Link to={to} className={'action ' + (className || '')}>{children}</Link>
    
// This is a wrapper around a button which will submit / carry out an action when clicked
const ActionButton = ({children, enabled, className, loading = false}) =>
    <button className={'action ' + (className || '')} disabled={!enabled}>{children}</button>


export { ActionLink, ActionButton };