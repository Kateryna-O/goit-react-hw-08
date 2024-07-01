import css from "./HomePage.module.css";

export const HomePage = () => {
  return (
    <div className={css.homePage}>
      <h1 className={css.title}>Welcome to Contacts App 📱</h1>
      <p className={css.description}>
        Manage your contacts efficiently and stay connected with your friends
        and family.
      </p>
    </div>
  );
};
