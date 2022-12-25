const mongoose = require('mongoose')
const objectId = mongoose.Schema.Types.ObjectId

const order = new mongoose.Schema({
    user_id:{
        type:objectId,
        ref:"NewUser"
    },
    user_id:{
        type:objectId,
        ref:"Products"
    },
    amount:Number,
    isFreeAppUser:Boolean,
    date :String
},{timestamps: true})

module.exports = mongoose.model('Orders', order)