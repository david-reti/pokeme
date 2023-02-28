import './Header.css'
import Logo from '../../assets/Logo.png'
import { Link } from 'react-router-dom';

const Header = () =>
    <header className='header'>
        <div className='header__background'></div>
        <Link to={'/'} className='header__link'>
            <img className='header__link__logo' src={Logo} alt=''></img>
            <h1 className='header__link__title'>PokéMe</h1>
        </Link>
    </header>

export default Header;