import React from "react";
import Circle from "../Circle/Circle";
import styles from "./Testimonials.module.css";
import { users } from "../../data";
import Image from "next/image";

const Testimonials = () => {
  return (
    <div className={styles.container}>
      <Circle backgroundColor="green" top="-70vh" />
      <h1 className={styles.title}>Opinie</h1>
      <div className={styles.wrapper}>
        {users.map((user, index) => {
          return (
            <div key={user.id} className={styles.card}>
              
              <div className={styles.header}>
                <div className={styles.header_user}>
                  {" "}
                  <Image
                    alt="avatar"
                    width="45"
                    height="45"
                    objectFit="cover"
                    src={`/images/users/${user.avatar}`}
                  />
                  <div className={styles.info}>
                    <span className={styles.username}>{user.name}</span>
                    <span className={styles.date}>{user.date}</span>
                  </div>{" "}
                  <Image
                    src={`/images/logos/${user.logo}`}
                    alt="logo"
                    width="25"
                    height="25"
                    objectFit="contain"
                  />
                </div>
                <div className={styles.header_note}>
                  {" "}
                  <div className={styles.note}>
                    Ocena{" "}
                    <span className={styles.note_number}>{user.note}</span>
                  </div>
                </div>
              </div>

              <p className={styles.comment}> {user.comment}</p>
              <div className={styles.person}></div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Testimonials;
