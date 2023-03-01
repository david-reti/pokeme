import { useRouteError } from "react-router-dom";
import { ActionLink } from "../../components/action/Action";

export default function Error () {
    const routeError = useRouteError();

    return <div className="container">
        <h2 className="title title--small">Unfortunately, a routing error has occured</h2>
        <p className="description">{routeError.statusText || routeError.message}</p>
        <p className="description">
            This is likely because you are trying to access a URL which doesn't exist, or a required component failed to load. 
        </p>
        <div className="row">
            <ActionLink to={'/'}>Back to Root</ActionLink>
        </div>
    </div>
}