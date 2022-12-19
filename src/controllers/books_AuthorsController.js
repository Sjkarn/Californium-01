const BooksModel = require("../models/booksModel")
const AuthorsModel = require("../models/authorsModel")

const createBooks= async function (req, res) {
    let data= req.body
    let savedData= await BooksModel.create(data)
    res.send({msg: savedData})
}

const create_Books= async function (req, res) {
    let data= req.body
    let savedData= await AuthorsModel.create(data)
    res.send({msg: savedData})
}

const listBooks= async function (req, res) {
    let findauthor= await AuthorsModel.find({author_name:"Chetan Bhagat"});
    let findbook= await BooksModel.find({author_id: {$eq:findauthor[0].author_id}});
    res.send({msg: findbook})
}

const updatebook= async function (req, res) {
    let bookprice= await BooksModel.findOneAndUpdate({name:"Two states"},{$set:{price:100}},{new:true});
    let updateprice= bookprice.price;
    let authorupdate= await AuthorsModel.find({author_id:{$eq:bookprice.author_id}}).select({author_name:1,id:0});
    res.send({authorupdate,updateprice})
}

const bookrange= async function (req, res) {
    let range= await BooksModel.find({price:{$gte:50,$lte:100}});
    let a= range.map(x=>x.author_id);
    let newrange= await AuthorsModel.find({author_id:a}).select({author_name:1,_id:0});
    res.send({newrange})
}

module.exports.createBooks = createBooks
module.exports.create_Books = create_Books
module.exports.listBooks = listBooks
module.exports.updatebook = updatebook
module.exports.bookrange = bookrange