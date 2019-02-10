import React, { Component } from "react";
import logo from "./logo.svg";
import "./styles/App.less";
import ButtonGroup from "./components/ButtonGroup";
import CallHistoryRow from "./components/CallHistoryRow";

class App extends Component {
  render() {
    return (
      <div className="App">
        <ButtonGroup />
        <CallHistoryRow />
      </div>
    );
  }
}

export default App;
