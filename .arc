@app
forest-zsg

@static

@http
get /js/:type/:module
get /push
get /
get /bundle/:type/:module

@tables
data
  scopeID *String
  dataID **String
  ttl TTL
