// Requiring in mongoose
const {connect, connection} = require("mongoose");
const connectionString = "mongodb://127.0.0.1:27017/dragonFruitDelightsDB";

// Connection
connect(connectionString);

// Exporting
module.exports = connection;