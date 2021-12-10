'use strict';

if (process.env.NODE_ENV === "production") {
  module.exports = require("./theme-ui-core-jsx-dev-runtime.cjs.prod.js");
} else {
  module.exports = require("./theme-ui-core-jsx-dev-runtime.cjs.dev.js");
}