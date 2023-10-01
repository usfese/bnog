const { DataTypes, Model } = require("sequelize");
const sequelize = require("../config/database");
class Tag extends Model {}

Tag.init(
  {
    name: {
      comment: "name",
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    isDeleted: {
      comment: "isDeleted",
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: false,
    },
  },
  {
    sequelize,
    modelName: "Tag",
  }
);

module.exports = Tag;