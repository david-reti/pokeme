import './Header.css'

import { Link } from 'react-router-dom';

import Logo from '../../assets/Logo.png'
import { TITLE } from '../../config/messages';

const Header = () =>
    <header className='header'>
        <div className='header__background'></div>
        <Link to={'/'} className='header__link'>
            <img className='header__link__logo' src={Logo} alt=''></img>
            <h1 className='header__link__title'>{TITLE}</h1>
        </Link>
    </header>

export default Header;