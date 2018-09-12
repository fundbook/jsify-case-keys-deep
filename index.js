var camelcase = require("camelcase");
var mapObj = require("map-obj");

function isifyBoolean(str) {
  return str.charAt(str.length - 1) === "?" ? "is_" + str.slice(0, -1): str
}

module.exports = function jsifyCaseKeysDeep(obj) {
  // Any falsy, which includes `null` whose typeof is `object`.
  if (!obj) {
    return obj;
  }
  // Date, whose typeof is `object` too.
  if (obj instanceof Date) {
    return obj;
  }
  // Array, whose typeof is `object` too.
  if (Array.isArray(obj)) {
    return obj.map(function(element) {
      return jsifyCaseKeysDeep(element);
    });
  }
  // So, if this is still an `object`, we might be interested in it.
  if (typeof obj === "object") {
    return mapObj(obj, function(key, value) {
      
      var newKey = camelcase(isifyBoolean(key));
      if (key !== newKey && newKey in obj) {
        throw new Error("Camelcased key `" + newKey + "` would overwrite existing key of the given JSON object");
      }
      return [newKey, jsifyCaseKeysDeep(value)];
    });
  }
  // Something else like a String or Number.
  return obj;
}
