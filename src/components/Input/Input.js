import React from "react";

import styles from "./Input.module.css";

function Input (props) {
    return (
      <div className={styles.formInput}>
        <label>{props.title}</label>
        <input
          type={props.type}
          placeholder={props.hint}
          onChange={props.onChange}
          value={props.value}
          name={props.name}
          maxLength={props.maxLength}
        />
        {props.error ? <p>{props.error} </p> : null}
      </div>
    );
  }


export default Input;
