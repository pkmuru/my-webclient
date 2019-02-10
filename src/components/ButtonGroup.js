import React, { Component } from "react";
import "../styles/ButtonGroup.less";

export default class ButtonGroup extends Component {
  render() {
    return (
      <div className="button-group">
        <button>All</button>
        <button>Missed calls</button>
        <button>Activity logged</button>
        <button>older</button>
      </div>
    );
  }
}
