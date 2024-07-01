import { Field, Form, Formik, ErrorMessage } from "formik";
import * as Yup from "yup";
import css from "./LoginForm.module.css";

const initialValues = {
  email: "",
  password: "",
};

const validationSchema = Yup.object({
  email: Yup.string().email("Invalid email").required("Required"),
  password: Yup.string()
    .min(7, "Too short")
    .max(50, "Too long")
    .required("Required"),
});

export const LoginForm = ({ submit }) => {
  const handleSubmit = (values, actions) => {
    submit(values);
    actions.resetForm();
  };
  return (
    <div className={css.formWrapper}>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        {({ isSubmitting, values }) => (
          <Form className={css.form}>
            <div className={css.fieldWrapper}>
              <Field
                type="email"
                name="email"
                placeholder="Email"
                className={css.input}
                autoComplete="email"
                value={values.email || ""}
              />
              <ErrorMessage
                name="email"
                component="div"
                className={css.errorMessage}
              />
            </div>
            <div className={css.fieldWrapper}>
              <Field
                type="password"
                name="password"
                placeholder="Password"
                className={css.input}
                autoComplete="current-password"
                value={values.password || ""}
              />
              <ErrorMessage
                name="password"
                component="div"
                className={css.errorMessage}
              />
            </div>
            <button
              type="submit"
              disabled={isSubmitting}
              className={css.submitButton}
            >
              LogIn
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
};
