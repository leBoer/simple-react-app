import React, { Component } from 'react';
import { Route } from 'react-router-dom'
import { Link } from 'react-router-dom'
import logo from '../images/logo.png';
import './App.css';
import * as FilesAPI from './FilesAPI'
import ListFiles from './ListFiles'
import Upload from './Upload'

class App extends Component {
  state = {
    files: [],
  }
  componentDidMount() {
    FilesAPI.getAll().then((files) => {
      this.setState({ files })
    })
    setTimeout(() => {
      console.log(this.state.files)
    }, 2000)
  }

  render() {
    const linkDivStyle = {
      float: "right",
    }
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <div style={linkDivStyle} className="links">
            <Link to="/">List of files</Link>
            <br/>
            <Link to="/upload">Upload a file</Link>
          </div>
        </div>
        <Route exact path="/" render={() => (
          <ListFiles
            files={this.state.files}
          />
        )}/>
        <Route exact path="/upload" render={() => (
          <Upload />
        )}/>
      </div>
    );
  }
}

export default App;
