import { ActionButton, ActionLink } from "../../components/action/Action";

const ReviewSubmission = () =>
    <>
        <h1 className="title title--small">Review Submission</h1>
        <p className="description">Here you can view the data which will be submitted and go back to any previous page to enter it again</p>
        <div className="row pushed-to-sides">
            <ActionLink to={'/user/favourites'} className='action--secondary'>Back</ActionLink>
            <ActionButton>Submit</ActionButton>
        </div>
    </>

export default ReviewSubmission;