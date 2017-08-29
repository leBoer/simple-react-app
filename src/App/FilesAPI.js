const api = "http://localhost:3003/files"

export const getAll = () =>
  fetch(`${api}`)
    .then(function (response) {
      return response.json()
    }).then(function (files) {
      return files
    }).catch(function (ex) {
      // console.log('parsing failed', ex)
    })
