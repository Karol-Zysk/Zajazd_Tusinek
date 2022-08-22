import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import styles from "./Contact.module.css"




const Contact = () => {
  const form = useRef(null)  ;
 

  const sendEmail = (e: { preventDefault: () => void; }) => {
    e.preventDefault();

    emailjs
      .sendForm(
        
        "replace with service id",
        "replace with template id",
        
        "replace with user id"
      )
      .then(
        (result) => {
          console.log(result.text);
          console.log("message sent");
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <div className={styles.container}>
      <form className={styles.form} ref={form} onSubmit={sendEmail}>
        <label className={styles.label}>Name</label>
        <input className={styles.input} type="text" name="user_name" />
        <label className={styles.label}>Email</label>
        <input className={styles.input} type="email" name="user_email" />
        <label className={styles.label}>Message</label>
        <textarea className={styles.textarea} name="message" />
        <input className={styles.input} type="submit" value="Send" />
      </form>
    </div>
  );
};

export default Contact;
