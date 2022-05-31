import React from "react";

import styles from "./Input.module.css";

class Input extends React.Component {
  render() {
    return (
      <div className={styles.formInput}>
        <label>{this.props.title}</label>
        <input
          type={this.props.type}
          placeholder={this.props.hint}
          onChange={this.props.onChange}
          value={this.props.value}
          name={this.props.name}
          maxLength={this.props.maxLength}
        />
        {this.props.error ? <p>{this.props.error} </p> : null}
      </div>
    );
  }
}

export default Input;
