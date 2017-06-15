var chai = require('chai')

var should = chai.should()

describe('testing formatting currency', function() {
  it('should return number to currency format 5000 to 5,000', function(done) {
    function erwarCurrency(number) {
      return new Intl.NumberFormat().format(number)
    }
    erwarCurrency(5000);
    done()
  })
})
