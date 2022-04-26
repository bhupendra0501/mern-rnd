const express =  require('express');
const dotenv = require('dotenv');
const connectDB = require('./config/config');
require('colors');
const morgan =  require('morgan');

// Config dotenv
dotenv.config()

//connection mongodb
connectDB()

const app = express()

//Middlewares
app.use(express.json())
app.use(morgan('dev'))

//Routes
app.get('/', (req, res) => {
    res.send('Hello from node server');
})


const port = process.env.PORT || 8080
app.listen(port, () => {
    console.log(`Server running on ${process.env.NODE_ENV} mode on port no ${process.env.PORT}`.bgMagenta.white);
});