import React from 'react';
import Conversion from '../components/Conversion.jsx';
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
    let entry = {
      input: this.state.term,
      output: translateSentence(this.state.term)
    };
    this.setState({
      conversions: [...this.state.conversions, entry]
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
        <span>Enter a sentence to be translated!<br/></span>
        <br />
        <input onKeyUp={this.handleInput}/>
        <button onClick={this.handleClick}>Convert</button>
        <div>
          {this.state.conversions.map((conversion, index) => {
            return <Conversion conversion={conversion} index={index}/>
          })}
        </div>
      </div>
    )
  }
}