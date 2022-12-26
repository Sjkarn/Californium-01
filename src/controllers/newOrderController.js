const NewOrderModel = require("../models/newOrderModel")
const NewUserModel = require("../models/newUserModel")
const NewProductModel = require("../models/newProductModel")

const createOrder= async function (req, res) {
    let appHeader = req.headers["isFreeAppUser"]
    if(!appHeader) appHeader = req.headers["isfreeappuser"]

    if(!appHeader) return res.send({status: false, message:"The mandatory header is not present"})

    console.log("request header is", appHeader)
    
    let data= req.body

    if(appHeader == 'true') {
        data.isFreeAppUser = true
    } else {
        data.isFreeAppUser = false
    }

    let user = await NewUserModel.findById(data.userId)
    if(!user) return res.send({status : false, message: "User not found"})

    let product = await NewProductModel.findById(data.productId)
    if(!product) return res.send({status: false, message: "Product not found"})

    if(appHeader == 'true') {
        data.amount = 0
        let savedData= await NewOrderModel.create(data)
        return res.send({status: true, data: savedData})
    }

    if(appHeader != 'true') {
        if(user.balance < product.price) {
            return res.send({staus: false, message: "user doesn't jave enough balance"})
        } else {
            
            data.amount = product.price
            let savedData= await NewOrderModel.create(data)
            await NewUserModel.findOneAndUpdate({_id:data.userId}, {balance:user.balance - product.price})
            return res.send({status: true, data: savedData})
        }
    }
}

module.exports.createOrder = createOrder