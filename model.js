'use strict';
const mongoose = require('mongoose');

class Bit{
    constructor(i){
        this.image_url = i.image_url,
        this.title = i.title,
        this.description = i.description,
        this.toUSD = i.toUSD
    }
}


const BitSchema = new mongoose.Schema({
    image_url: String,
    title: String,
    description: String,
    toUSD: String

  });

  const BitModel = mongoose.model('BitList', BitSchema);

module.exports={Bit,BitModel}