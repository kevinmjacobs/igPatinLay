import React from 'react';
import axios from 'axios';

export default class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: ''
    };
    this.handleInput = this.handleInput.bind(this);
    this.isLoggedIn = props.isLoggedIn;
  }

  handleInput(e) {
    this.setState({
      [e.target.name]: e.target.value
    });
  }

  handleSubmit(e, cb) {
    axios.get('/api/user', {
      params: {
        username: this.state.username,
        password: this.state.password
      }
    })
    .then(res => {
      if (res.data) {
        this.isLoggedIn();
      }
    })
    .catch((err) => console.log('error making axios get user request', err));
  }

  render() {
    return (
      <div>
        <h4>
          Login
        </h4>
        <div>
          User Name:<input type="text" name="username" onKeyUp={this.handleInput}/>
          Password:<input type="text" name="password" onKeyUp={this.handleInput}/>
          <button onClick={(e) => this.handleSubmit(e, this.isLoggedIn)}>Submit</button>
        </div>
        <div></div>
      </div>
    )
  }
}