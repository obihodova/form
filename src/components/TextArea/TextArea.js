import React from "react";

import styles from "./TextArea.module.css";

class TextArea extends React.Component {
  render() {
    return (
      <div className={styles.textareaForm}>
        <label>{this.props.title}</label>
        <textarea
          type={this.props.type}
          onChange={this.props.onChange}
          value={this.props.value}
          rows="7"
          name={this.props.name}
        ></textarea>
        {this.props.value.length < 600 ? (
          <p className={styles.counter}>{`${this.props.value.length} / 600`}</p>
        ) : null}
        {this.props.error ? <p className={styles.error}>{this.props.error} </p> : null}
      </div>
    );
  }
}

export default TextArea;
