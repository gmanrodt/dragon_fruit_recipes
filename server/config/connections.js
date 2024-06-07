// Requiring in mongoose and dotenv
const {connect, connection} = require("mongoose");
const path = require('path');
require("dotenv").config({path: path.join(__dirname, "../.env")})
const connectionString = process.env.MONGODB_URI || "mongodb://127.0.0.1:27017/dragonFruitDelightsDB";

// Connection
connect(connectionString);

// Exporting
module.exports = connection;