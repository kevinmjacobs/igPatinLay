import React from 'react';
import { translateSentence } from '../../helpers/pigLatinTranslator';

export default class App extends React.Component {
  constructor() {
    super();
    this.state = {
      term: '',
      conversions: []
    };
    this.handleInput = this.handleInput.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  //on type update term
  handleInput(e) {
    console.log(e.target.value);
    this.setState({
      term: e.target.value
    });
  }

  handleClick(e) {
    e.preventDefault();
    this.setState({
      conversions: [...this.state.conversions, translateSentence(this.state.term)]
    }, () => {
      this.setState({
        term: ''
      }, () => {
        console.log('current state term',this.state.term);
        console.log('current state conversions',this.state.conversions);
      })
    });

  }

  render() {
    return(
      <div>
        <span>Enter a sentence to be translated!</span>
        <input type="text" onKeyUp={(e) => this.handleInput(e)}/>
        <button onClick={this.handleClick}>Convert</button>
      </div>
    )
  }
}