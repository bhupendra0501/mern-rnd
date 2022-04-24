const express =  require('express');
require('colors');
const morgan =  require('morgan');

const app = express()

//Middlewares
app.use(express.json())
app.use(morgan('dev'))

//Routes
app.get('/', (req, res) => {
    res.send('Hello from node server');
})

app.listen(8080, () => {
    console.log('Server is running on port 8080');
});