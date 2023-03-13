import React from 'react';
import styles from './SuccessfulRegistration.module.css';

function SuccessfulRegistration (){

  return(
    <>
      <h1 className={styles.header}>Поздравляем!</h1>
      <p className={styles.info}>Вы успешно зарегистрированы 🥳</p>
    </>
  );
}

export default SuccessfulRegistration;
