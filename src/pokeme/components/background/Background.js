import './Background.css';

import { BACKGROUND_IMAGE_URL } from '../../config/urls';

// Just a single div containing the background image - TODO: make this image configurable
const Background = (image = BACKGROUND_IMAGE_URL) => 
    <div className='background'></div>

export default Background;