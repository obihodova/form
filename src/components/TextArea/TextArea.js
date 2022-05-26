import React from "react";

import "./TextArea.css";

class TextArea extends React.Component {
  render() {
    return (
      <div>
        <label>{this.props.title}</label>
        <textarea type={this.props.type}  rows="7"></textarea>
      </div>
    );
  }
}

export default TextArea;
