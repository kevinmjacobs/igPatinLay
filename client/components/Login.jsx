import React from 'react';

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
    e.preventDefault();
    console.log(e.target);
    cb();
  }

  render() {
    return (
      <div>
        Login
        User Name:<input type="text" name="username" onKeyUp={this.handleInput}/>
        Passowrd:<input type="text" name="password" onKeyUp={this.handleInput}/>
        <button onClick={(e) => this.handleSubmit(e, this.isLoggedIn)}>Submit</button>
      </div>
    )
  }
}