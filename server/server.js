require('dotenv').config()
const express = require('express'),
    app = express(),
    axios = require('axios')
    userCtrl = require('./userController')

app.use(express.json())
const {SERVER_PORT} = process.env

//Get user


//Maps


//Shapes to Map


// 
app.get('/api/getUser', userCtrl.getUser)



PORT = SERVER_PORT
app.listen(PORT, () => console.log(`✨✨✨ PORT:${PORT}✨✨✨`))