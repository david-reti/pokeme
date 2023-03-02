import { ActionLink } from '../../components/action/Action';

import { ROOT_ACTION, ROOT_DESCRIPTION, ROOT_TITLE } from '../../../config/messages';

const Root = () =>
    <>
        <h1 className='title'>{ROOT_TITLE}</h1>
        <p className='description'>{ROOT_DESCRIPTION}</p>
        <div className='row'>
            <ActionLink to={'user/details'} className='pushed-right'>{ROOT_ACTION}</ActionLink>
        </div>
    </>

export default Root;