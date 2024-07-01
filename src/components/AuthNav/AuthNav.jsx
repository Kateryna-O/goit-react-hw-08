import { Link } from "react-router-dom";
import css from "./AuthNav.module.css";

export const AuthNav = () => {
  return (
    <div className={css.authNav}>
      <Link to="/login">
        <button className={css.button}>LogIn</button>
      </Link>
      <Link to="/register">
        <button className={css.button}>Register</button>
      </Link>
    </div>
  );
};
