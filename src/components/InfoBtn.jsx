import React from "react";

export default class InfoBtn extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <button
        onMouseEnter={() => this.props.handleHover(this.props.data)}
        className="info-btn"
      >
        {this.props.children}
      </button>
    );
  }
}
