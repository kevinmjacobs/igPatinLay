import React from 'react';
// import ReactDOM from 'react-dom';
import Conversion from '../components/Conversion.jsx';
import { Saved } from '../components/Saved.jsx'
import Login from '../components/Login.jsx';
import axios from 'axios';
import { translateSentence } from '../../helpers/pigLatinTranslator';

export default class App extends React.Component {
  constructor() {
    super();
    this.state = {
      loggedIn: false,
      term: '',
      conversions: [],
      option: 'Main',
      saved: []
    };
    this.handleInput = this.handleInput.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.handleOptionChange = this.handleOptionChange.bind(this);
    this.isLoggedIn = this.isLoggedIn.bind(this);
    this.logout = this.logout.bind(this);
    this.render = this.render.bind(this);
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

  isLoggedIn() {
    this.setState({
      loggedIn: true
    })
  }

  logout() {
    this.setState({
      loggedIn: false
    }, () => {
      this.render()
    })
  }

  render() {
    if (!this.state.loggedIn) {
      return (
        <div>
          <Login isLoggedIn={this.isLoggedIn}/>
        </div>
      )
    }
    else {
      if (this.state.option === 'Main') {
        return (
          <div>
            <button id="logout" onClick={() => this.logout()}>Logout</button>
            <div id="radios">
              <label><input type="radio" value="Main" checked={this.state.option === 'Main'} onChange={this.handleOptionChange}/>Main</label>
              <label><input type="radio" value="Saved" checked={this.state.option === 'Saved'} onChange={this.handleOptionChange}/>Top 10 Saved</label>
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
            <button id="logout">Logout</button>
            <div id="radios">
              <label><input type="radio" value="Main" checked={this.state.option === 'Main'} onChange={this.handleOptionChange}/>Main</label>
              <label><input type="radio" value="Saved" checked={this.state.option === 'Saved'} onChange={this.handleOptionChange}/>Top 10 Saved</label>
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
            <button id="logout">Logout</button>
            <div>
              <label><input type="radio" value="Main" checked={this.state.option === 'Main'} onChange={this.handleOptionChange}/>Main</label>
              <label><input type="radio" value="Saved" checked={this.state.option === 'Saved'} onChange={this.handleOptionChange}/>Top 10 Saved</label>
              <label><input type="radio" value="User" checked={this.state.option === 'User'} onChange={this.handleOptionChange}/>User</label>
            </div>
          </div>
        )
      }

    }

  }
}