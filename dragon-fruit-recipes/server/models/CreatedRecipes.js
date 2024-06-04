const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');
const bcrypt= require('bcrypt');

class CreatedRecipes extends Model {}

CreatedRecipes.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        title:{
            type: DataTypes.STRING
        },
        category:{
            type: DataTypes.STRING
        },
        instructions:{
            type: DataTypes.STRING
        },
        ingredients:{
            type: DataTypes.STRING
        },
        picture:{

        }
    }
)