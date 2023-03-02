/* App Components And Pages */
import App from '../App';
import Error from '../pages/error/Error';
import Root from '../pages/root/Root';
import UserDetails from '../pages/user-details/UserDetails';
import UserFavourites from '../pages/user-favourites/UserFavourites';
import ReviewSubmission from '../pages/review-submission/ReviewSubmission';

/* Actions and Loaders */
import { saveUserDetails, saveUserFavourites } from '../actions/UserData';
import { loadDataForSubmission, loadUserData, loadUserFavourites } from '../loaders/UserData';
import AttemptSubmission from '../actions/Submission';
import Success from '../pages/success/Success';

const ROUTES = {
    path: '/',
    element: <App/>,
    errorElement: <Error/>,
    children: [
      {
        index: true,
        element: <Root/>
      },
      {
        path: 'user/details',
        element: <UserDetails/>,
        action: saveUserDetails,
        loader: loadUserData
      },
      {
        path: 'user/favourites',
        element: <UserFavourites/>,
        action: saveUserFavourites,
        loader: loadUserFavourites
      },
      {
        path: 'submission',
        element: <ReviewSubmission/>,
        action: AttemptSubmission,
        loader: loadDataForSubmission
      },
      {
        path: 'submission/success',
        element: <Success/>
      }
    ]
}

export default ROUTES;