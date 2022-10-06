"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var mongoose = require('mongoose');

var contact = require('./contact');

var server = 'localhost:3000';
var database = 'myDB';

var Database =
/*#__PURE__*/
function () {
  function Database() {
    _classCallCheck(this, Database);

    this._connect();
  }

  _createClass(Database, [{
    key: "_connect",
    value: function _connect() {
      mongoose.connect("mongodb://".concat(server, "/").concat(database)).then(function () {
        console.log('Database connection successful');
      })["catch"](function (err) {
        console.error('Database connection error');
      });
    }
  }]);

  return Database;
}();

module.exports = new Database();
var msg = new contact({
  fullName: "Alex Anderson",
  email: "Alex-Anderson@gmail.com",
  phoneNumber: 2255889993,
  birthdate: 1990
});
msg.save().then(function (doc) {
  console.log(doc);
})["catch"](function (err) {
  console.error(err);
});
var newcontacts = [{
  fullName: "lola fricks",
  email: "lola fricks@gmail.com",
  phoneNumber: 225588546884,
  birthdate: 1995
}, {
  fullName: "Ronney Dias",
  email: "Ronney Dias@gmail.com",
  phoneNumber: 586655889993,
  birthdate: 1980
}, {
  fullName: "Adam crouch",
  email: "AdamCrouch@gmail.com",
  phoneNumber: 2255889993,
  birthdate: 1975
}];
contact.create(newcontacts).then(function (doc) {
  console.log(doc);
})["catch"](function (err) {
  console.log(err);
});