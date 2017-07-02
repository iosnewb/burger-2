//requiring our burger model
var db = require("../models");

// Create all our routes and set up logic within those routes where required.

module.exports = function(app){

  app.get("/", function(req, res){
    db.burgers.findAll({}).
    then(function(data){
      var hasObj = {
        burger: data
      }
      res.render("index", hasObj);
    });
  });

  app.post("/", function(req, res){
    db.burgers.create({
      burger_name: req.body.burger_name,
      devoured: false
    }).then(function(dbPost){
      res.redirect("/");
    });
  });

  app.put("/:id", function(req, res) {
    db.burgers.update({
      devoured: true,
    }, {
      where: {
        id: req.params.id
      }
    }).then(function(dbPost){
      res.redirect("/");
    });
  });
  
};

