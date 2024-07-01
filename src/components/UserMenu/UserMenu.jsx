import { useDispatch, useSelector } from "react-redux";
import { logoutOperation } from "../../redux/auth/operations";
import { selectUser } from "../../redux/auth/selectors";
import css from "./UserMenu.module.css";

export const UserMenu = () => {
  const { name } = useSelector(selectUser);
  const dispatch = useDispatch();
  const handlelogout = () => {
    dispatch(logoutOperation());
  };
  return (
    <div className={css.userMenu}>
      <p className={css.welcomeMessage}>Welcome, {name}</p>
      <button onClick={handlelogout} className={css.logoutButton}>
        LogOut
      </button>
    </div>
  );
};
