import React, { Component } from "react";
import "../styles/CallHistoryRow.less";

export default class CallHistoryRow extends Component {
  render() {
    return (
      <div className="callhistory-row">
        <div className="call-direction" />

        <div className="call-details">
          <span className="name">Muruganantham</span>
          <span className="client-name">ABC Technologieds</span>
          <span className="phone">+201 234 234</span>
        </div>
      </div>
    );
  }
}
