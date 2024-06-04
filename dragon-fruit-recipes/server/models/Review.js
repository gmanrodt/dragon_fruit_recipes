const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');
const bcrypt= require('bcrypt');

class Review extends Model {}

Review.init(
    {
        id: {
            type: DataTypes.INTEGER
        },
        rating: {
            type: DataTypes.INTEGER
        },
        comments: {
            type: DataTypes.STRING
        },
    
    },
    {
        sequelize,
        underscored: true,
        freezeTableName: true,
        modelName: 'review'
    },

);
module.exports = Review;