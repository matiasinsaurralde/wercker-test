var app = {}
var redis = require("redis"),
    client = redis.createClient()
app.doStuff = function() {
  client.set( 'abc', '123' )
}
app.getStuff = function( callback ) {
  client.get( 'abc', function( err, value ) {
    callback( value )
  })
}
module.exports = app
