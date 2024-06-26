const express = require('express');
const path = require('path');
const db = require('./config/connections');
const routes = require("./routes");
const cookieParser = require("cookie-parser");
const PORT = process.env.PORT || 3002;
const app = express();

app.use(cookieParser());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(routes);

if (process.env.NODE_ENV === 'production') {
    app.use(express.static(path.join(__dirname, '../client/dist')));
    app.get('*', (req, res) => {
        res.sendFile(path.join( __dirname, '../client/dist/index.html'))
    })
}

db.once('open', () => {
    app.listen(PORT, () => console.log(`API server running on port ${PORT}!`));
});

