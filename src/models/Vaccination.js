const { DataTypes } = require("sequelize");

const { conn } = require("src/adapters");

const Vaccination = conn.define(
  "Vaccination",
  {
    name: {
      allowNull: true,
      type: DataTypes.STRING,
    },
    drug_id: {
      allowNull: true,
      type: DataTypes.INTEGER,
    },
    dose: {
      allowNull: true,
      type: DataTypes.INTEGER,
    },
    date: {
      allowNull: false,
      type: DataTypes.DATE,
    },
  },
  {
    tableName: "vaccinations",
  }
);

module.exports = Vaccination;
