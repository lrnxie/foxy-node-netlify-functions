const rewire = require('rewire');
const prePayment = rewire('./pre-pament-webhook-webflow-price');


describe('Verifies the price of an item in a Webflow collection', function() {

  it('Identifies the price field');
  it('Identifies the quantity field');
  it('Retrieves item data from webflow');
  it('Verifies that price, currency and product are correct');


});