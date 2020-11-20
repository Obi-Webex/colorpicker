import React from "react";
import "./button.css";

export class Button extends React.Component {
  render() {
    return (
      <button
        className={this.props.light ? "light-button" : "dark-button"}
        onClick={this.props.onClick}
      >
        Refresh
      </button>
    );
  }
}
