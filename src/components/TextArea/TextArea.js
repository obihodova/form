import React from "react";

import styles from "./TextArea.module.css";

function TextArea(props) {
  return (
    <div className={styles.textareaForm}>
      <label>{props.title}</label>
      <textarea
        type={props.type}
        onChange={props.onChange}
        value={props.value}
        rows="7"
        name={props.name}
      ></textarea>
      {props.value.length < 600 ? (
        <p className={styles.counter}>{`${props.value.length} / 600`}</p>
      ) : null}
      {props.error ? <p className={styles.error}>{props.error} </p> : null}
    </div>
  );
}

export default TextArea;
