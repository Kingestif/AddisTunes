const express = require('express');
const app = express();
const morgan = require('morgan');
const cors = require('cors');

app.use(cors());
app.use(morgan('dev')); 

app.get("/", (req, res) => {
    res.send(" Service  Is  Running");
});

module.exports = app;