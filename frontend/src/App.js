// import logo from './logo.svg';
import React from 'react'
import './App.css';

import {
  SERVER_URL,
} from './constants'


class App extends React.Component {
  constructor(props) {
    super(props)
  }
  async componentDidMount() {
    const req = await fetch(`${SERVER_URL}/`, {
      mode: 'cors',
    })
    const { data } = await req.json()
    console.log(data)
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          Learn React
        </header>
      </div>
    );
  }
}

export default App;
