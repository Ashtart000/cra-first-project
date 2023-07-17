import React from "react";
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isOn: false
    };
  }

  toggle() {
    this.setState({
      isOn: !this.state.isOn
    })
  }

  render() {
    const className = this.state.isOn ? 'lampOn' : 'lampOff';
    return (
      <>
      <div className={className}></div>
      <button onClick={() => {this.toggle()}}>On/Off</button>
      </>
    )
  }
}

export default App;
