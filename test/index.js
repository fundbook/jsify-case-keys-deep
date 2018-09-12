var expect = require("chai").expect;
var jsifyKeysDeep = require("../index");

describe("jsifyKeysDeep", function() {
  var extract;

  it("should deeply jsify the keys of a JSON object", function() {
    var aDate = new Date(2016, 3, 15);
    var json = {
      unicorn_rainbow: {
        foo_bar: 1,
        a_date: aDate,
        an_array: [1, 2, {foo_bar: 3}],
        'flying?': true
      }
    };
    expect(jsifyKeysDeep(json)).to.be.deep.equal({
      unicornRainbow: {
        fooBar: 1,
        aDate: aDate,
        anArray: [1, 2, {fooBar: 3}],
        isFlying: true
      }
    });
  });

  it("should raise if jsified key would overwrite existing key of the JSON object", function() {
    var json = {unicorn_rainbow: {foo_bar: 1, fooBar: 2}};
    expect(function() {
      jsifyKeysDeep(json);
    }).to.throw();

    json = {foo: 1}
    expect(function() {
      jsifyKeysDeep(json);
    }).to.not.throw();
  });

});
