import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { selectorisLoggedIn } from "../../redux/auth/selectors";
import css from "./Navigation.module.css";

export const Navigation = () => {
  const isLoggedIn = useSelector(selectorisLoggedIn);
  return (
    <nav className={css.nav}>
      <ul className={css.navList}>
        <li className={css.navItem}>
          <Link to="/" className={css.navLink}>
            Home
          </Link>
        </li>
        {isLoggedIn && (
          <li className={css.navItem}>
            <Link to="/contacts" className={css.navLink}>
              Contacts
            </Link>
          </li>
        )}
      </ul>
    </nav>
  );
};
