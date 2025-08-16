const express = require('express');
const app = express();
const morgan = require('morgan');
const cors = require('cors');
const songRouter = require('./routes/songRoutes');

app.use(cors());
app.use(morgan('dev')); 

app.get("/", (req, res) => {
    res.send(" Service  Is  Running");
});

app.use('/api/v1/songs', songRouter)

module.exports = app;