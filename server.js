const express = require('express')
const Moralis = require('moralis').default;
const app = express();
const cors = require('cors')
require('dotenv').config();
const port = process.env.port;

app.use(cors())
app.use(express.json())

app.use(('/tokenPrice'), require('./Routes/tokenPrice'))

Moralis.start({
    apiKey: process.env.Moralis_Key,
}).then(()=> {
    app.listen(port, ()=> {
        console.log(`Server is running on port ${port}`)
    })
})