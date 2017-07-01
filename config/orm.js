var connection = require('../config/connection.js');

var orm = {
    selectAll: function(tblName, cb){
        var queryString = "SELECT * FROM " +tblName;
        console.log(queryString);
        connection.query(queryString, function(err, res){
            if(err) throw err;

            cb(res);
        });
    },
    insertOne: function(tblName, burger, cb){
        var queryString = "INSERT INTO " +tblName+ " (burger_name, devoured) VALUES ('"+burger+"', 0)";
        console.log(queryString);
        connection.query(queryString, function(err, res){
            if(err) throw err;

            cb(res);
        });
    },
    updateOne: function(tblName, id, cb){
        var queryString = "UPDATE " +tblName+ " SET devoured = 1 WHERE id = " +id;
        console.log(queryString);
        connection.query(queryString, function(err, res){
            if(err) throw err;

            cb(res);
        });
    }
}


module.exports = orm;