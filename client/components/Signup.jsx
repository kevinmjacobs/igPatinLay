import React from 'react';
import axios from 'axios';

import App from './App.jsx';

export default class Signup extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: '',
      signedUp: false
    };
    this.handleInput = this.handleInput.bind(this);
  }

  handleInput(e) {
    this.setState({
      [e.target.name]: e.target.value
    });
  }

  handleSubmit(e, cb) {
    axios.post('/api/user', {
      username: this.state.username,
      password: this.state.password
    })
    .then(res => {
      console.log('axios post user successful');
      this.setState({
        signedUp: true
      });
    })
    .catch(err => console.log('error making axios post user,', err));
  }

  render() {
    if (this.state.signedUp) {
      return (
        <div>
          <App />
        </div>
      )
    } else {
      return (
        <div>
          <h4>
            Signup
          </h4>
          <div>
            User Name:<input type="text" name="username" onKeyUp={this.handleInput}/>
            Password:<input type="text" name="password" onKeyUp={this.handleInput}/>
            <button onClick={(e) => this.handleSubmit(e, this.isLoggedIn)}>Submit</button>
          </div>
          <button id="signup" onClick={() => this.signup()}>Signup</button>
        </div>
      )
    }
  }

}