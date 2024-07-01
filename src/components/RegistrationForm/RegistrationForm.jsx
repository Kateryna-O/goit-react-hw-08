import { Field, Form, Formik, ErrorMessage } from "formik";
import * as Yup from "yup";
import css from "./RegistrationForm.module.css";

const initialValues = {
  name: "",
  email: "",
  password: "",
};

const validationSchema = Yup.object().shape({
  name: Yup.string()
    .min(3, "Too short")
    .max(50, "Too long")
    .required("Required"),
  email: Yup.string().email("Invalid email").required("Required"),
  password: Yup.string()
    .min(7, "Too short")
    .max(50, "Too long")
    .required("Required"),
});

export const RegistrationForm = ({ submit }) => {
  const handleSubmit = (values, actions) => {
    submit(values);
    actions.resetForm();
  };

  return (
    <div className={css.formWrapper}>
      <h3 className={css.title}>Registration Form</h3>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        {({ isSubmitting, values }) => (
          <Form className={css.form}>
            <div className={css.fieldWrapper}>
              <Field
                type="text"
                name="name"
                placeholder="Name"
                className={css.input}
                autoComplete="username"
                value={values.name || ""}
              />
              <ErrorMessage
                name="name"
                component="div"
                className={css.errorMessage}
              />
            </div>
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
              Registration
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default RegistrationForm;
