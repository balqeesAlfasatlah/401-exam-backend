
const express = require('express');
const cors = require('cors');
const axios = require('axios');
require('dotenv').config();
const app= express();
app.use(cors());
PORT = process.env.PORT
app.use(express.json());


const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/bitcoins');

const{getBit,addBit,getData,deleteBit,updateBit}= require('./controller')

app.listen(PORT,(req,res)=>{
    console.log('its working fine')
})

app.get('/', (req,res)=>{
    res.send("home page")
} )


//localhost:3008/getBit
app.get('/getBit', getBit )
app.post('/addBit', addBit )
app.get('/getData', getData)
app.delete('/deleteBit/:id', deleteBit )
app.put('/updateBit/:id', updateBit )


