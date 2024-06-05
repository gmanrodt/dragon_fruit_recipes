const mongoose = require('mongoose'); 


const reviewSchema= new mongoose.Schema ({
        rating: {
            type: DataTypes.INTEGER
        },
        comments: {
            type: DataTypes.STRING
        },
    
    },
    {
        id: false,
        versionKey: false
    },

);
const Review = new mongoose.model("review", reviewSchema);
module.exports = Review; 