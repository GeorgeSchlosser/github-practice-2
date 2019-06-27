module.exports = function(sequelize, DataTypes) {
  var Acts = sequelize.define("Acts", {
    actTitle: DataTypes.STRING,
    actText: DataTypes.TEXT,
    nextAct: DataTypes.INTEGER,
    correctChoie: DataTypes.BOOLEAN,
    wrongChoiceText: DataTypes.STRING,
    imgUrl: DataTypes.STRING
  });

  return Acts;
};
