@app
forest-zsg

@static

@http
get /js/:type/:module
get /push
get /

@tables
data
  scopeID *String
  dataID **String
  ttl TTL
