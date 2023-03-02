import './Footer.css'

import { CREDITS, DEVELOPER } from '../../config/messages';

const Footer = () =>
    <footer className='footer'>
        <p className='footer__text'>
            {DEVELOPER}<a href='https://davidreti.net'>davidreti.net</a>
            <br/>
            {CREDITS}
        </p>
    </footer>

export default Footer;