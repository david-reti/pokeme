/* App Components And Pages */
import App from '../pokeme/App';
import Error from '../pokeme/pages/error/Error';
import Root from '../pokeme/pages/root/Root';
import UserDetails from '../pokeme/pages/user-details/UserDetails';
import UserFavourites from '../pokeme/pages/user-favourites/UserFavourites';
import ReviewSubmission from '../pokeme/pages/review-submission/ReviewSubmission';

/* Actions and Loaders */
import { saveUserDetails, saveUserFavourites } from '../pokeme/actions/UserData';

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
        action: saveUserDetails
      },
      {
        path: 'user/favourites',
        element: <UserFavourites/>,
        action: saveUserFavourites
      },
      {
        path: 'submission',
        element: <ReviewSubmission/>
      }
    ]
}

export default ROUTES;