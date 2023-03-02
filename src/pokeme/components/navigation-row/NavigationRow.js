import { ActionLink, ActionButton } from "../action/Action"

import { BACK, NEXT } from "../../config/messages";

const NavigationRow = ({backLink, backText = BACK, actionText = NEXT, enabled = true}) =>
    <div className="row pushed-to-sides">
        <ActionLink to={backLink} className='action--secondary'>{backText}</ActionLink>
        <ActionButton enabled={enabled}>{actionText}</ActionButton>
    </div>

export default NavigationRow;