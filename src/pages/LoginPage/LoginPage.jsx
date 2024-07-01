import { useDispatch, useSelector } from "react-redux";
import { LoginForm } from "../../components/LoginForm/LoginForm";
import { loginOperation } from "../../redux/auth/operations";

export const LoginPage = () => {
  const dispatch = useDispatch();
  const login = (userData) => {
    dispatch(loginOperation(userData));
  };

  return (
    <>
      <LoginForm submit={login} />
    </>
  );
};
