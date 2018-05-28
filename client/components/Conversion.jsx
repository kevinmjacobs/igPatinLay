import React from 'react';
import axios from 'axios';

export default class Conversion extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      input: props.conversion.input,
      output: props.conversion.output,
      saved: false
    };
  }
  save() {
    this.setState({
      saved: true
    });
    axios.post('/api/convert', {
      input: this.state.input,
      output: this.state.output
    })
    .then((res) => console.log('save axios request successful,',res))
    .catch((err) => console.log('error making axios post request', err));
  }

  render() {
    if (this.state.saved) {
      return (
        <div>
          {this.state.output} Saved!
        </div>
      )
    } else {
      return (
        <div>
          {this.state.output} <button onClick={() => this.save()}>Save</button>
        </div>
      )
    }
  }

}