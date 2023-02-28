import { Form } from "react-router-dom";

import { ActionButton } from "../../components/action/Action";

const UserDetails = () =>
    <>
        <h2 className="title title--small">User Details</h2>
        <p className="description">
            We will start by gathering some basic information about you - all these data stay on your device. 
        </p>
        <Form method="post">
            <ActionButton>Next</ActionButton>
        </Form>
    </>

export default UserDetails;