"use strict";

const table = {
  tableName: "vaccinations",
  schema: process.env.DB_SCHEMA,
};

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable(table, {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.DataTypes.INTEGER,
      },
      name: {
        allowNull: true,
        type: Sequelize.DataTypes.STRING,
      },
      drug_id: {
        allowNull: true,
        type: Sequelize.DataTypes.INTEGER,
      },
      dose: {
        allowNull: true,
        type: Sequelize.DataTypes.INTEGER,
      },
      date: {
        allowNull: false,
        type: Sequelize.DataTypes.DATE,
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DataTypes.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DataTypes.DATE,
      },
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable("vaccinations");
  },
};
