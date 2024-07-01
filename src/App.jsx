import "./App.css";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { Route, Routes } from "react-router";
import { Layout } from "./components/Layout/Layout";
import { lazy, Suspense } from "react";
import Loader from "./components/Loader/Loader";
import { selectorisRefreshing } from "./redux/auth/selectors";
import { refreshUser } from "./redux/auth/operations";
import { PrivateRoute } from "./components/PrivateRoute/PrivateRoute";
import { RestrictedRoute } from "./components/RestrictedRoute/RestrictedRoute";

// const HomePage = lazy(() => import("./pages/HomePage/HomePage"));
// const ContactsPage = lazy(() =>
//   import("./pages/ContactsPage/ContactsPage.jsx")
// );
// const NotFoundPage = lazy(() =>
//   import("./pages/NotFoundPage/NotFoundPage.jsx")
// );
// const RegistrationPage = lazy(() =>
//   import("./pages/RegistrationPage/RegistrationPage.jsx")
// );
// const LoginPage = lazy(() => import("./pages/LoginPage/LoginPage.jsx"));

import { HomePage } from "./pages/HomePage/HomePage";
import { ContactsPage } from "./pages/ContactsPage/ContactsPage";
import { NotFoundPage } from "./pages/NotFoundPage/NotFoundPage";
import { RegistrationPage } from "./pages/RegistrationPage/RegistrationPage";
import { LoginPage } from "./pages/LoginPage/LoginPage";
function App() {
  const isRefreshing = useSelector(selectorisRefreshing);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  return isRefreshing ? (
    <p>Refreshing user ... please wait ⌛</p>
  ) : (
    <Layout>
      <Suspense fallback={<Loader />}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route
            path="/register"
            element={
              <RestrictedRoute
                redirectTo="/contacts"
                component={<RegistrationPage />}
              />
            }
          />
          <Route
            path="/login"
            element={
              <RestrictedRoute
                redirectTo="/contacts"
                component={<LoginPage />}
              />
            }
          />
          <Route
            path="/contacts"
            element={
              <PrivateRoute redirectTo="/login" component={<ContactsPage />} />
            }
          />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </Suspense>
    </Layout>
  );
}

export default App;
