module.exports = function(sequelize, DataTypes) {
  var PoolGuy = sequelize.define("PoolGuy", {
    // Giving the Author model a name of type STRING
  id: {
      primaryKey: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      autoIncrement: true,
      validate: {
        len: [1]
      }
    },
  poolguy_name: {
    type: DataTypes.STRING,
    allowNull: false,
    len: [1]
    },
  water_balance: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: false,
      len: [1]
    },
    pool_sanitizing: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: false,
      len: [1]
    },
    shocking_treatment: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: false,
      len: [1]
    },
    clarification: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: false,
      len: [1]
    },
    periodic_cleaning: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: false,
      len: [1]
    },
    filterbackwashingandrepair: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: false,
      len: [1]
    }
  });
  return PoolGuy;
};