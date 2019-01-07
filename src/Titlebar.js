import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Back from './back.js';
import Title from './title.js';
import Close from './close.js';
// import './style.css';

class Login extends Component {
  render() {
    return (
      <div className="header">
          <Back/>
          <Title/>
          <Close/>
        
      </div>
    );
  }
}
ReactDOM.render(<Back />, document.getElementById('back'));
ReactDOM.render(<Title />, document.getElementById('title'));
ReactDOM.render(<Close />, document.getElementById('close'));

export default Login;