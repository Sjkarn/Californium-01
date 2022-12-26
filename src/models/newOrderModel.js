const mongoose = require('mongoose')
const objectId = mongoose.Schema.Types.ObjectId

const order = new mongoose.Schema({
    userId:{
        type:objectId,
        ref:"NewUser"
    },
    productId:{
        type:objectId,
        ref:"Products"
    },
    amount:Number,
    isFreeAppUser:Boolean,
    date :String
},{timestamps: true})

module.exports = mongoose.model('Orders', order)