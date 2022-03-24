'use strict';

module.exports = {
  async up (queryInterface, DataTypes) {

    return queryInterface.createTable('Cnabs', {
      id: { allowNull: false, autoIncrement: true, primaryKey: true, type: DataTypes.INTEGER,},
      type: { allowNull: true, type: DataTypes.STRING(2), },
      kind: { allowNull: true, type: DataTypes.STRING, },
      amount: { allowNull: true, type: DataTypes.DECIMAL, },
      description: { allowNull: true, type: DataTypes.TEXT, },
      cpf: { allowNull: true, type: DataTypes.STRING(11), },
      card: { allowNull: true, type: DataTypes.STRING(12), },
      date: { allowNull: true, type: DataTypes.STRING(10), },
      datetime: { allowNull: true, type: DataTypes.DATE, },
      owner: { allowNull: true, type: DataTypes.TEXT, },
      company: { allowNull: true, type: DataTypes.TEXT, },
      createdAt: { allowNull: false, type: DataTypes.DATE, },
      updatedAt: { allowNull: false, type: DataTypes.DATE, },
    });
  },

  async down (queryInterface) {
    return queryInterface.dropTable('Cnabs');
  }
};
