@app
forest-zsg

@static

@http
get /js/:type/:module

@tables
data
  scopeID *String
  dataID **String
  ttl TTL
