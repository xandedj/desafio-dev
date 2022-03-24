module.exports = (sequelize, DataTypes) => {
  const Cnabs = sequelize.define('Cnabs', {
    type: DataTypes.STRING(2),
    kind: DataTypes.STRING,
    amount: DataTypes.DECIMAL,
    description: DataTypes.TEXT                        ,
    cpf: DataTypes.STRING(11),
    card: DataTypes.STRING(12),
    date: DataTypes.STRING(10),
    datetime: DataTypes.DATE,
    owner: DataTypes.TEXT                        ,
    company: DataTypes.TEXT                        ,
  });

  return Cnabs;
}