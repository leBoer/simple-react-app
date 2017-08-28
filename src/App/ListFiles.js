import React, { Component } from 'react'

class ListFiles extends Component {
  render() {
    const { files } = this.props
    return (
      <div className="list-files">
        <h1>List of Files</h1>
        <ol className="files">
        {files.map((file) => (
          <li key={file.id}>{file.name}</li>
        ))}
        </ol>
      </div>
    )
  }
}

export default ListFiles