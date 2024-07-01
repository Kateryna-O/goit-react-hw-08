import { useSelector } from "react-redux";
import { selectorisLoggedIn } from "../../redux/auth/selectors";
import { Navigate } from "react-router-dom";

export const RestrictedRoute = ({ component: Component, redirectTo = "/" }) => {
  const isLoggedIn = useSelector(selectorisLoggedIn);

  return isLoggedIn ? <Navigate to={redirectTo} /> : Component;
};
