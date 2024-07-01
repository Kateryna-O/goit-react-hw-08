import { Link } from "react-router-dom";
import css from "./NotFoundPage.module.css";

export const NotFoundPage = () => {
  return (
    <div className={css.wrapper}>
      <h3 className={css.title}>Page Not Found</h3>
      <Link to="/" className={css.link}>
        Back to Home page
      </Link>
    </div>
  );
};
