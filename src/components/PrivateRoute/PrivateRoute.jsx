import { useSelector } from "react-redux";
import { selectorisLoggedIn } from "../../redux/auth/selectors";
import { Navigate } from "react-router-dom";

export const PrivateRoute = ({ component: Component, redirectTo = "/" }) => {
  const isLoggedIn = useSelector(selectorisLoggedIn);

  return isLoggedIn ? Component : <Navigate to={redirectTo} />;
};
