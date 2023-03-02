import Loader from "../loader/Loader";
import { ActionLink, ActionButton } from "../action/Action"

import { BACK, NEXT } from "../../config/messages";

/*
    This component encapsulates the row of buttons on the bottom of most pages, which allow for navigation
    By default, the buttons will have the text for going to the previous and next page, but this is customisable
    If loading is true, a loading animation will be shown instead of the text for the action button
*/
const NavigationRow = ({backLink, backText = BACK, actionText = NEXT, enabled = true, loading = false}) =>
    <div className="row pushed-to-sides">
        <ActionLink to={backLink} className='action--secondary'>{backText}</ActionLink>
        <ActionButton enabled={enabled}>{loading ? <Loader/> : actionText}</ActionButton>
    </div>

export default NavigationRow;