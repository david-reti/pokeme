import { useRouteError } from "react-router-dom";

import { ActionLink } from "../../components/action/Action";

import { BACK_TO_ROOT, ERROR_DESCRIPTION, ERROR_TITLE } from "../../../config/messages";

export default function Error () {
    const routeError = useRouteError();

    return <div className="container">
        <h2 className="title title--small">{ERROR_TITLE}</h2>
        <p className="description">{routeError.statusText || routeError.message}</p>
        <p className="description">{ERROR_DESCRIPTION}</p>
        <div className="row">
            <ActionLink to={'/'}>{BACK_TO_ROOT}</ActionLink>
        </div>
    </div>
}