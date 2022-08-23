import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import styles from "./Contact.module.css";
import { RiMailCheckLine } from "react-icons/ri";

const Contact = () => {
  const form = useRef(null);
  const [sent, setSent] = useState<boolean>(false);

  const sendEmail = (event: {
    preventDefault: () => void;
    currentTarget: { reset: () => void };
  }) => {
    event.preventDefault();

    emailjs
      .sendForm(
        "service_1i54s7s",
        "template_mxuoxtn", //@ts-ignore
        form.current,
        "0bxfrdbXfmW1bkKmw"
      )
      .then(
        (result) => {
          setSent(true);
        },
        (error) => {
          alert(
            "sprawdź połączenie internetowe lub skontaktuj się z zysk.karol.pawel@gmail.com"
          );
        }
      );
    event.currentTarget.reset();
  };

  return (
    <>
      <div className={styles.wrapper}>
        <h1 className={styles.header}>Napisz do nas</h1>
        <form className={styles.form} ref={form} onSubmit={sendEmail}>
          <input
            className={styles.input}
            required={true}
            placeholder="Imię i Nazwisko"
            type="text"
            name="user_name"
          />
          <input
            className={styles.input}
            required={true}
            placeholder="Email"
            type="email"
            name="user_email"
          />
          <textarea
            className={styles.textarea}
            required={true}
            placeholder="Treść Wiadomości"
            name="message"
          />
          {!sent ? (
            <input className={styles.button} type="submit" value="Wyślij" />
          ) : (
            <p className={styles.sent_message}>
              Wysłano
              <RiMailCheckLine className={styles.icon}/>
            </p>
          )}
        </form>
      </div>
    </>
  );
};

export default Contact;
