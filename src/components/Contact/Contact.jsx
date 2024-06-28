import React from "react";
import styles from "./Contact.module.css";
import { useDispatch, useSelector } from "react-redux";
import { deleteContact } from "../../redux/contactsOps.js";

const Contact = ({ contact }) => {
  const dispatch = useDispatch();

  const contacts = useSelector((state) => state.contacts.items);
  const loading = useSelector((state) => {
    state.contacts.loading;
  });
  const error = useSelector((state) => {
    state.contacts.error;
  });

  const handleDelete = () => {
    dispatch(deleteContact(contact.id));
  };

  return (
    <>
      {loading && <h2>loading..</h2>}
      {error && <> {error} </>}
      {contacts && (
        <div className={styles.contact}>
          <span>
            {contact.name}: {contact.phone}
          </span>
          <button onClick={handleDelete} className={styles.deleteButton}>
            Delete
          </button>
        </div>
      )}
    </>
  );
};

export default Contact;
