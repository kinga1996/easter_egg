import React, { Component } from 'react';
import './App.css';

import { SketchPicker } from 'react-color'

class App extends Component {

  state = {
    color1: '#34c280',
    color2: '#f99599',
    color3: '#f9f9df'
  };

  handleChangeComplete1 = (color) => {
    this.setState({ color1: color.hex });
  };
  handleChangeComplete2 = (color) => {
    this.setState({ color2: color.hex });
    document.documentElement.style.setProperty("--color2", this.state.color2)
  };
  handleChangeComplete3 = (color) => {
    this.setState({ color3: color.hex });
    document.documentElement.style.setProperty("--color3", this.state.color3)
  };

  render(){


  return (
    <div className="App" >
      <h1>Easter Egg</h1>

      <div className="scrolls">
      <SketchPicker
            color={ this.state.color1 }
            onChangeComplete={ this.handleChangeComplete1 }
      />
      <SketchPicker
            color={ this.state.color2 }
            onChangeComplete={ this.handleChangeComplete2 }
      />

      <SketchPicker
            color={ this.state.color3 }
            onChangeComplete={ this.handleChangeComplete3 }
      />
      </div>

      <div className="egg" style={{backgroundColor: this.state.color1}}>
            <div className="stripe stripe-dots"></div>
            <div className="stripe stripe-zygzag"></div>
            <div className="stripe stripe-heart"></div>
      </div>

    </div>
  );
}}

export default App;
