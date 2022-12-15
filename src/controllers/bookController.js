const BookModel= require("../models/bookModel")

const createUserData= async function (req, res) {
    let data= req.body
    let savedData= await BookModel.create(data)
    res.send({msg: savedData})
}

const getUsersDataBack= async function (req, res) {
    let allUsers= await BookModel.find()
    res.send({msg: allUsers})
}

module.exports.createUserData = createUserData
module.exports.getUsersDataBack = getUsersDataBack