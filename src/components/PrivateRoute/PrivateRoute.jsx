import { HOME_ROUTE } from '../../constans/routes';
import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import { selectAuthenticated } from '../../redux/auth/authSelectors';

const PrivateRoute = ({ children, navigateTo = HOME_ROUTE }) => {
  const authenticated = useSelector(selectAuthenticated);

  return authenticated ? children : <Navigate to={navigateTo} replace />;
};

export default PrivateRoute;
