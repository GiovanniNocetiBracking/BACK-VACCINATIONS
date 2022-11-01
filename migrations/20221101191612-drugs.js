"use strict";

const table = {
  tableName: "drugs",
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
      approved: {
        allowNull: true,
        type: Sequelize.DataTypes.BOOLEAN,
      },
      min_dose: {
        allowNull: true,
        type: Sequelize.DataTypes.INTEGER,
      },
      max_dose: {
        allowNull: true,
        type: Sequelize.DataTypes.INTEGER,
      },
      available_at: {
        allowNull: true,
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
    await queryInterface.dropTable("drugs");
  },
};
