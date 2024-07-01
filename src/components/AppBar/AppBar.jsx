import { useSelector } from "react-redux";
import { selectorisLoggedIn } from "../../redux/auth/selectors";
import { AuthNav } from "../AuthNav/AuthNav";
import { Navigation } from "../Navigation/Navigation";
import { UserMenu } from "../UserMenu/UserMenu";
import css from "./AppBar.module.css";

export const AppBar = () => {
  const isLoggedIn = useSelector(selectorisLoggedIn);
  return (
    <div className={css.appBar}>
      <Navigation />
      {isLoggedIn ? <UserMenu /> : <AuthNav />}
    </div>
  );
};
