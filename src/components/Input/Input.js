import React from "react";

import "./Input.css";

class Input extends React.Component {
  render() {
    return (
      <div>
        <label>{this.props.title}</label>
        <input type={this.props.type} placeholder={this.props.hint} />
      </div>
    );
  }
}

export default Input;
