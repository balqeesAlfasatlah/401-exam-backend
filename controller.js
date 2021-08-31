'use strict';
const axios = require('axios');
const{Bit,BitModel}= require('./model')



const getBit=(req,res)=>{
 let url='https://crypto-explorer.herokuapp.com/crypto-list/'
 axios.get(url).then(item=>{
    let bitData = item.data;
    bitData.map(i=>{
        return(new Bit(i))
    })
    res.send(bitData)

 })
}

const addBit=(req,res)=>{
    let bitData = req.body
    let newBit = new BitModel({...bitData}).then(item=>{
     newBit.save()
    })
    
    
}

const getData=(res,req)=>{
    BitModel.find({},(error,item=>{
        res.send(item)
    }))
}


const deleteBit=(req,res)=>{
    let index = req.params.id
    BitModel.findByIdAndRemove(index,(error,item)=>{
        BitModel.find({},(error,item2=>{
            res.send(item2)
        }))

    })
}

const updateBit=(req,res)=>{
    let index = req.params.id;
    let updateData = req.body
    BitModel.findByIdAndUpdate(index,{...updateData},(error,item)=>{
        BitModel.find({},(error,item2=>{
            res.send(item2)
        }))

    })
    
}



module.exports ={getBit,addBit,getData,deleteBit,updateBit}