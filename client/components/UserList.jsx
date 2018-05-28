import React from 'react';
import axios from 'axios';


export default class User extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userSaved: props.userList
    };
  }

  render() {
    return(
      <div>
        {this.userSaved}
      </div>
    )
  }

}