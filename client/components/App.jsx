import React from 'react';
import Conversion from '../components/Conversion.jsx';
import { Saved } from '../components/Saved.jsx'
import axios from 'axios';
import { translateSentence } from '../../helpers/pigLatinTranslator';

export default class App extends React.Component {
  constructor() {
    super();
    this.state = {
      term: '',
      conversions: [],
      option: 'Main',
      saved: []
    };
    this.handleInput = this.handleInput.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.handleOptionChange = this.handleOptionChange.bind(this);
  }

  componentDidMount() {
    this.fetchSaved();
  }

  //on type update term
  handleInput(e) {
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

  handleOptionChange(e) {
    this.setState({
      option: e.target.value
    }, () => this.fetchSaved())
  }

  fetchSaved() {
    axios.get('/api/convert')
    .then((res) => {
      console.log('axios fetch saved successful');
      this.setState({
        saved: res.data 
      })
    })
    .catch((err) => console.log('error with axios get request', err));
  }

  render() {
    if (this.state.option === 'Main') {
      return (
        <div>
          <div id="radios">
            <label><input type="radio" value="Main" checked={this.state.option === 'Main'} onChange={this.handleOptionChange}/>Main</label>
            <label><input type="radio" value="Saved" checked={this.state.option === 'Saved'} onChange={this.handleOptionChange}/>Saved</label>
            <label><input type="radio" value="User" checked={this.state.option === 'User'} onChange={this.handleOptionChange}/>User</label>
          </div>
          <br />
          <div id="search">
            <span>Enter a sentence to be translated!<br/></span>
            <input onKeyUp={this.handleInput}/>
            <button onClick={this.handleClick}>Convert</button>
          </div>
          <div id="conversions">
            {this.state.conversions.map((conversion, index) => {
              return <Conversion conversion={conversion} index={index}/>
            })}
          </div>
        </div>
      )
    } else if (this.state.option === 'Saved') {
      return (
        <div>
          <div id="radios">
            <label><input type="radio" value="Main" checked={this.state.option === 'Main'} onChange={this.handleOptionChange}/>Main</label>
            <label><input type="radio" value="Saved" checked={this.state.option === 'Saved'} onChange={this.handleOptionChange}/>Saved</label>
            <label><input type="radio" value="User" checked={this.state.option === 'User'} onChange={this.handleOptionChange}/>User</label>
          </div>
          <br />
          <table id="saved">
            <thead>
              <tr>
                <th>Output</th>
                <th>Total Saved</th>
              </tr>
            </thead>
            <tbody>
              {this.state.saved.map((save, index) => {
                return <Saved output={save.output} total={save.totalSaved} index={index}/>
              })}
            </tbody>
          </table>
        </div>
      )
    } else {
      return (
        <div>
          <div>
            <label><input type="radio" value="Main" checked={this.state.option === 'Main'} onChange={this.handleOptionChange}/>Main</label>
            <label><input type="radio" value="Saved" checked={this.state.option === 'Saved'} onChange={this.handleOptionChange}/>Saved</label>
            <label><input type="radio" value="User" checked={this.state.option === 'User'} onChange={this.handleOptionChange}/>User</label>
          </div>
        </div>
      )
    }

  }
}