'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Movie extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Movie.init({
    movie_id: {
      type: DataTypes.INTEGER,
      primaryKey:true,
      autoIncrement:true,
    },

    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },

    genre: {
      type: DataTypes.STRING,
    allowNull: false,
    },

    run_time: {
      type: DataTypes.INTEGER,
    allowNull: false,
    },

    year_released: {
      type: DataTypes.SMALLINT,
    allowNull: false,
    },

    cast: {
      type: DataTypes.STRING,
    allowNull: false,
    }

  }, {
    sequelize,
    modelName: 'Movie',
    tableName: 'movies',
    timestamps: false
  });
  return Movie;
};