import { useRouteError } from "react-router-dom";

import Card from "../../components/card/Card";
import { ActionLink } from "../../components/action/Action";

import { BACK_TO_ROOT, ERROR_DESCRIPTION, ERROR_TITLE } from "../../../config/messages";

export default function Error () {
    const routeError = useRouteError();

    return (
        <div className="container">
            <Card title={ERROR_TITLE} description={ERROR_DESCRIPTION}>
                <p className="description">{routeError.status}: {routeError.statusText || routeError.message}</p>
                <div className="row">
                    <ActionLink to={'/'}>{BACK_TO_ROOT}</ActionLink>
                </div>
            </Card>
        </div>
    );
}