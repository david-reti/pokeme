import { useRouteError } from "react-router-dom";

export default function Error () {
    const routeError = useRouteError();

    return <>
        <strong>Unfortunately, a routing error has occured:</strong>
        <p>{routeError.statusText || routeError.message}</p>
    </>
}