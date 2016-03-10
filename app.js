var app = {}
var redis = require("redis"),
    client = redis.createClient( process.env.REDIS_PORT_6379_TCP_PORT, process.env.REDIS_PORT_6379_TCP_ADDR )
app.doStuff = function() {
  client.set( 'abc', '123' )
}
app.getStuff = function( callback ) {
  client.get( 'abc', function( err, value ) {
    callback( value )
  })
}
module.exports = app
