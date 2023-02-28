import './Action.css';
import { Link } from 'react-router-dom';

const ActionLink = ({to, text}) =>
    <div className='row'>
        <Link to={to} className='action'>{text}</Link>
    </div>

export { ActionLink };