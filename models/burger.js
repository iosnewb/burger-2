var orm = require('../config/orm.js');

var burger = {
  selectAll: function(cb) {
    orm.selectAll("burger", function(res) {
      cb(res);
    });
  },
  insertOne: function(burger, cb) {
    orm.insertOne("burger", burger, function(res) {
      cb(res);
    });
  },
  updateOne: function(id, cb) {
    orm.updateOne("burger", id, function(res) {
      cb(res);
    });
  }
};

module.exports = burger;

