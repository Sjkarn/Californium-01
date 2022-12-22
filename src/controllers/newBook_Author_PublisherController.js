const newAuthorModel= require("../models/newAuthorModel")
const newPublisherModel= require("../models/newPublisherModel")
const newBookModel= require("../models/newBookModel")

const createBooks= async function (req, res) {
    let book = req.body
    let bookCreated = await newAuthorModel.create(book)
    res.send({data: bookCreated})
}

const create_Books= async function (req, res) {
    let book = req.body
    let bookCreated = await newPublisherModel.create(book)
    res.send({data: bookCreated})
}

const creatingBooks= async function (req, res) {
    const {publisher,author} = req.body
    if(!author){
        return res.send({msg: "author is mandatory"})
    }
    if(!publisher){
        return res.send({msg: "publisher is mandatory"})
    }
    const authorDetails = await newAuthorModel.findOne({_id:author})
    if(!authorDetails){
        return res.send({msg: "author doesn't exit"})
    }
    const publisherDetails = await newPublisherModel.findOne({_id:publisher})
    if(!publisherDetails){
        return res.send({msg: "publisher doesn't exit"})
    }
    let bookCreated = await newBookModel.create(req.body)
    res.send({data: bookCreated})
}

const getBooksWithAuthorAndPublisherDetails = async function (req, res) {
    let specificBook = await newBookModel.find().populate('author').populate('publisher')
    res.send({data: specificBook})
}

const updateBooks = async function (req,res) {
    const publishers = await newPublisherModel.find({name:{$in:['Penguin', 'HarperCollins']}})
    const publisherId = publishers.map(publisher=>publisher._id)
    const updateData = await newBookModel.updateMany({publisher:{$in:publisherId}}, {$set:{isHardCover:true}})
    res.send({data: updateData})
}

const update_Books = async function (req,res) {
    const update_Data = await newBookModel.updateMany({rating:{$gt: 3.5}}, {price:{$inc: 10}})
    res.send({data: update_Data})
}

module.exports = {createBooks,create_Books,creatingBooks,getBooksWithAuthorAndPublisherDetails,updateBooks,update_Books}