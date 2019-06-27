module.exports = function(sequelize, DataTypes) {
  var Acts = sequelize.define("Acts", {
    actText: DataTypes.TEXT,
    nextScene: DataTypes.INTEGER,
    wrongChoiceText: DataTypes.TEXT
  });

  var Images = sequelize.define("Images", {
    imgUrl: DataTypes.STRING,
    act: DataTypes.INTEGER
  });

  var Users = sequelize.define("Users", {
    userName: DataTypes.STRING,
    userPassword: DataTypes.STRING,
    currentAct: DataTypes.INTEGER
  });

  return Acts, Images, Users;
};