const { promisify } = require('util')
const readFile = promisify(require('fs').readFile)
const join = require('path').join

exports.handler = async function http(req) {
  let params = req.params || {}
  let type = params.type
  let module = params.module
  let response = {
    status: 404,
    body: 'File not found'
  }
  if (type && module) {
    try {
      response = {
        headers: {
          'content-type': 'application/javascript; charset=utf8'
        },
        body: fs.readFile(join(__dirname, 'node_modules', '@architect', 'views', type, module))
      }
    } catch (err) {
      response = {
        status: 500,
        body: err
      }
    }
  }

  return response
}
