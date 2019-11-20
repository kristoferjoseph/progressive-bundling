// Enable secure sessions, express-style middleware, and more:
// https://docs.begin.com/en/functions/http/
//
// let begin = require('@architect/functions')

let html = `
<!doctype html>
<html lang=en>
  <head>
    <meta charset=utf-8>
    <title>PBJ</title>
    <link href="data:image/x-icon;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII=" rel="icon" type="image/x-icon" />
  </head>
  <body>
    <script type="module" src="/js/pages/main.js"></script>
  </body>
</html>
`

// HTTP function
exports.handler = async function http(req, res) {
  if (res.push) {
    console.log('PUSH ENABLED')
    res.push(
      '/js/ui/footer.js',
      {
        req: {'accept': '**/*'},
        res: {'content-type': 'application/javascript'}
      }
    )
  }
  return {
    headers: {
      'content-type': 'text/html; charset=utf8'
    },
    body: html
  }
}
