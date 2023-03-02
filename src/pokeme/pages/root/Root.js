import Card from '../../components/card/Card';
import { ActionLink } from '../../components/action/Action';

import { ROOT_ACTION, ROOT_DESCRIPTION, ROOT_TITLE } from '../../config/messages';

const Root = () =>
    <Card title={ROOT_TITLE} description={ROOT_DESCRIPTION} titleSize='large'>
        <div className='row'>
            <ActionLink to={'user/details'} className='pushed-right'>{ROOT_ACTION}</ActionLink>
        </div>
    </Card>

export default Root;