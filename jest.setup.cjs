const dotenv = require("dotenv");

function jestSetup() {
  dotenv.config({
    path: ".env.test",
  });
}

module.exports = jestSetup;
