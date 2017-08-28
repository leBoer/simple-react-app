import React, { Component } from 'react';
import logo from '../images/logo.png';
import './App.css';
import * as FilesAPI from './FilesAPI'
import ListFiles from './ListFiles'

class App extends Component {
  state = {
    files: []
  }
  componentDidMount() {
    FilesAPI.getAll().then((files) => {
      this.setState({ files })
    })
    setTimeout(() => {
      console.log(this.state.files[878])
      console.log(typeof(this.state.files))
    }, 2000)
  }
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
        </div>
        <ListFiles
          files={this.state.files}
        />
      </div>
    );
  }
}

export default App;
