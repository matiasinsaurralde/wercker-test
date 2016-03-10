var chai = require( 'chai' )

chai.should()

describe( 'dummy', function() {
  var app = require( '../app' )
  beforeEach( function() {
    app.doStuff()
  })
  it( 'should create a key', function( done ) {
    app.getStuff( function( value ) {
      if( value ) {
        done()
      }
    })
  })
})
