import React, { Component } from 'react'
import { DataTable } from 'react-data-components'

class ListFiles extends Component {
  render() {
    const { files } = this.props
    return (
      <div className="list-files">
        <h1>List of Files</h1>
        <BuildTable
          files={files}
        />
      </div>
    )
  }
}

class BuildTable extends Component {
  render() {
    const { files } = this.props
    const tableColumns = [
      { title: 'Name', prop: 'name' },
      { title: 'Description', prop: 'desc'},
      { title: 'Size', prop: 'size' },
      { title: 'Created', prop: 'created' }
    ]
    return(
      <DataTable
        className="container"
        keys="id"
        columns={tableColumns}
        initialData={files}
        initialPageLength={20}
        initialSortBy={{ prop: 'name', order: 'ascending' }}
        pageLengthOptions={[ 20, 50, 100 ]}
      />
    )
  }
}

export default ListFiles