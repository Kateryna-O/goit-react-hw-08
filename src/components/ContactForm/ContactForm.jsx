import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import React from "react";
import styles from "./ContactForm.module.css";
import { useDispatch } from "react-redux";
import { addContact } from "../../redux/contacts/operations";

const FeedbackSchema = Yup.object().shape({
  name: Yup.string()
    .min(3, "Too short")
    .max(50, "Too long")
    .required("Required"),
  number: Yup.string()
    .min(3, "Too short")
    .max(50, "Too long")
    .required("Required"),
});

const ContactForm = () => {
  const initialValues = {
    name: "",
    number: "",
  };
  const dispatch = useDispatch();

  const handleSubmit = (values, actions) => {
    const newContact = {
      name: values.name,
      number: values.number,
    };
    dispatch(addContact(newContact));
    actions.resetForm();
  };

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={handleSubmit}
      validationSchema={FeedbackSchema}
    >
      <Form className={styles.form}>
        <div className={styles.field}>
          <Field
            type="text"
            name="name"
            placeholder="Name"
            className={styles.input}
          />
          <ErrorMessage name="name" component="div" className={styles.error} />
        </div>
        <div className={styles.field}>
          <Field
            type="number"
            name="number"
            placeholder="Phone number"
            className={styles.input}
          />
          <ErrorMessage
            name="number"
            component="div"
            className={styles.error}
          />
        </div>
        <button type="submit" className={styles.button}>
          Add contact
        </button>
      </Form>
    </Formik>
  );
};

export default ContactForm;
