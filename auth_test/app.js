var jwt = require("jsonwebtoken");
var fs = require("fs");

var jwt = require("jsonwebtoken");
var token = jwt.sign({ foo: "bar" }, "shhhhh");

var privateKey = fs.readFileSync("private.txt");
// var token = jwt.sign({ foo: "bar" }, privateKey, { algorithm: "RS256" });

jwt.sign(
  { foo: "bar" },
  privateKey,
  { algorithm: "RS256" },
  function (err, token) {
    console.log(err);
  }
);
