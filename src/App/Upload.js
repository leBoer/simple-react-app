import React, { Component } from 'react'

class Upload extends Component {
  state = {
    file: 
      {
        name: "ChristianBorresen.pdf",
        size: 32153252,
        created: "Jan 9th, 14:45 EST",
        description: ""
      }
    
  }
  readFile() {
    const upload = this.fileUpload.files[0]
    const file = this.state.file
    file.name = upload.name
    file.size = upload.size
    file.created = upload.lastModifiedDate.toString()
    this.setState((state) => ({
      file
    }))
  }

  handleSubmit = (event) => {
    console.log('test')
    alert('Your file has been uploaded: ' + this.state.file.name)
    // event.preventDefault()
  }

  handleChange = (event) => {
    console.log(event.target.value)
    const file = this.state.file
    file.description = event.target.value
    this.setState((state) => ({
      file
    }))
  }

  render() {
    return (
      <div className="upload-file">
        <input
          type="file"
          onChange={(event) => { this.readFile() }}
          ref={(ref) => this.fileUpload = ref}
        />
      <MetaData 
        file={this.state.file}
        handleSubmit={this.handleSubmit}
        handleChange={this.handleChange}
      />
      </div>
    )
  }
}

class MetaData extends Component {
  render() {
    const divStyle = {
      textAlign: "left",
      marginTop: "10px"
    }
    const { file, handleSubmit, handleChange } = this.props
    if (file.name) {
      return (
        <div style={divStyle} className="metadata">
          <form onSubmit={handleSubmit}>
            <b>File Name: </b><br/>
            <input type="text" name="filename" value={file.name} readOnly /><br/>
            <b>File Size: </b><br/>
            <input type="text" name="filesize" value={file.size} readOnly /><br/>
            <b>Created: </b><br/>
            <input type="text" name="filecreated" value={file.created} readOnly /><br/>
            <b>Description: </b><br/>
            <textarea name="filedescription" placeholder="Enter File Description" onChange={handleChange} /><br/>
            <input type="submit" value="Submit" />
          </form>
        </div>
      )
    } else {
      return (
        <div></div>
      )
    }
  }
}
export default Upload