const { DataTypes, Model } = require("sequelize");
const sequelize = require("../db");

class User extends Model {}

User.init(
  {
    username: {
      comment: "username",
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    password: {
      comment: "password",
      type: DataTypes.STRING,
      allowNull: false,
    },
    nickname: {
      comment: "nickname",
      type: DataTypes.STRING,
      allowNull: false,
    },
    lastOnlineTime: {
      comment: "lastOnlineTime",
      type: DataTypes.DATE,
      allowNull: true,
    },
  },
  {
    sequelize,
    modelName: "User",
  }
);

module.exports = User;