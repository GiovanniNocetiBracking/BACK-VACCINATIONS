const { DataTypes } = require("sequelize");

const { conn } = require("src/adapters");

const Drug = conn.define(
  "User",
  {
    name: {
      allowNull: true,
      type: DataTypes.STRING,
    },
    email: {
      allowNull: false,
      type: DataTypes.STRING,
    },
    password: {
      allowNull: false,
      type: DataTypes.STRING,
    },
  },
  {
    tableName: "users",
  }
);

module.exports = Drug;
