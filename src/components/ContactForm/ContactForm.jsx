import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import React from "react";
import { nanoid } from "nanoid";
import styles from "./ContactForm.module.css";
import { useDispatch } from "react-redux";
import { addContact } from "../../redux/contactsOps";

const FeedbackSchema = Yup.object().shape({
  username: Yup.string()
    .min(3, "Too short")
    .max(50, "Too long")
    .required("Required"),
  usertel: Yup.string()
    .min(3, "Too short")
    .max(50, "Too long")
    .required("Required"),
});

const ContactForm = () => {
  const initialValues = {
    username: "",
    usertel: "",
  };
  const dispatch = useDispatch();

  const handleSubmit = (values, actions) => {
    const newContact = {
      name: values.username,
      phone: values.usertel,
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
            name="username"
            placeholder="Name"
            className={styles.input}
          />
          <ErrorMessage
            name="username"
            component="div"
            className={styles.error}
          />
        </div>
        <div className={styles.field}>
          <Field
            type="tel"
            name="usertel"
            placeholder="Phone number"
            className={styles.input}
          />
          <ErrorMessage
            name="usertel"
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
