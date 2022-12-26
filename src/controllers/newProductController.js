const NewProductModel = require("../models/newProductModel")

const createProduct= async function (req, res) {
    
    let data= req.body
    let savedData= await NewProductModel.create(data)
    res.send({status: true, data: savedData})
}

module.exports.createProduct = createProduct