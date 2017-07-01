module.exports = function(sequelize, DataType){
  var burgers = sequelize.define("burgers", {
    burger_name: {
      type: DataType.STRING
    },
    devoured: {
      type: DataType.BOOLEAN,
      defaultValue: false
    }
  });
  return burgers;
};