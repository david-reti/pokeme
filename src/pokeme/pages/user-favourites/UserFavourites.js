import { Form } from "react-router-dom";
import { ActionButton } from "../../components/action/Action";

const UserFavourites = () =>
    <>
        <h1 className="title title--small">Select Favourite Pokemon</h1>
        <Form method="post">
            <ActionButton>Next</ActionButton>
        </Form>
    </>

export default UserFavourites;