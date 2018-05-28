import React from 'react';

export default class Saved extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      saved: []
    }
  }

  render() {
    return(
      <div>
        {this.state.saved}
      </div>
    )
  }


}