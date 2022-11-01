const { DataTypes } = require("sequelize");

const { conn } = require("src/adapters");

const Drug = conn.define(
  "Drug",
  {
    name: {
      allowNull: true,
      type: DataTypes.STRING,
    },
    approved: {
      allowNull: true,
      type: DataTypes.BOOLEAN,
    },
    min_dose: {
      allowNull: true,
      type: DataTypes.INTEGER,
    },
    max_dose: {
      allowNull: true,
      type: DataTypes.INTEGER,
    },
    available_at: {
      allowNull: false,
      type: DataTypes.DATE,
    },
  },
  {
    tableName: "drugs",
  }
);

module.exports = Drug;
