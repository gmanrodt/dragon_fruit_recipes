const mongoose = require('mongoose'); 

const recipeSchema= new mongoose.Schema ({
    title:{
        type: string,
        require: true,
        unique: true,
    },
    category:{
        type: string,
        required: true
    },
    instructions:{
        type: string,
        required: true
    },
    ingredients:{
        type: string,
        required: true
    },
    measurment:{
        type: integer,
        required:true
    },
    picture:{
        data: Buffer,
        contentType: String
    },

},
{
    id: false,
    versionKey: false
}
)

const Recipe = new mongoose.model("recipe", recipeSchema);
module.exports = Recipe; 

