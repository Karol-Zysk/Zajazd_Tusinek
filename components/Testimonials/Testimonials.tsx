import React from "react";
import Circle from "../Circle/Circle";
import styles from "./Testimonials.module.css";
import {users} from '../../data'

const Testimonials = () => {
  return (
    <div className={styles.container}>
      <Circle backgroundColor="green" top="-70vh" />
      <h1 className={styles.title}>Opinie</h1>
      <div className={styles.wrapper}>
        {users.map((user)=>{
            return(
                <div key={user.id} className={styles.card}></div>
            )
        })}
      </div>
    </div>
  );
};

export default Testimonials;
