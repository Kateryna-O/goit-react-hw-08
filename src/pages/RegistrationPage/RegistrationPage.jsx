import { useDispatch } from "react-redux";
import { RegistrationForm } from "../../components/RegistrationForm/RegistrationForm";
import { registerOperation } from "../../redux/auth/operations";

export const RegistrationPage = () => {
  const dispath = useDispatch();
  const register = (userData) => {
    dispath(registerOperation(userData));
  };
  return (
    <>
      <RegistrationForm submit={register} />
    </>
  );
};
