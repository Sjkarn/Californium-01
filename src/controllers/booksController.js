const BooksModel= require("../models/booksModel")

const createBooks = async function (req, res) {
    const book = req.body
    let savedBook = await BooksModel.create(book)
    res.send({ msg: savedBook })
}

const allBooksList = async function (req, res) {
    let list = await BooksModel.find().select({ bookName: 1, authorName: 1, _id: 0 })
    res.send({ msg: list })
}

const yearDetails = async function (req, res) {
    let newyear= req.query.year
    let yearList= await BooksModel.find({year:newyear})
    res.send({msg: yearList})
 }

const particularBooks = async function (req, res) {
    let specificBooks = await BooksModel.find(req.body)
    res.send({msg: specificBooks})
 }

const priceDetails= async function(req,res){
    let list = await BooksModel.find({"prices.indianPrice": {$in: ["100INR", "200INR","500 INR"]}} ).select({bookName:1,_id:0})
    res.send({ msg: list })
}

const randomBooks= async function(req, res) {
    let allBooks = await BooksModel.find({$or:[ {stockAvailable: true},{ totalPages: {$gt: 500}}]})
    res.send({msg: allBooks })
}

module.exports.createBooks = createBooks
module.exports.allBooksList = allBooksList
module.exports.yearDetails = yearDetails
module.exports.particularBooks = particularBooks
module.exports.priceDetails = priceDetails
module.exports.randomBooks = randomBooks