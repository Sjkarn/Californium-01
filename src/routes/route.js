const express = require('express');
const router = express.Router();
// const UserModel= require("../models/userModel.js")
const UserController= require("../controllers/userController")
const BookController= require("../controllers/bookController")
const BooksController = require("../controllers/booksController")

router.get("/test-me", function (req, res) {
    res.send("My first ever api!")
})

router.post("/createUser", UserController.createUser  )

router.get("/getUsersData", UserController.getUsersData)

router.post("/createBook", BookController.createBook  )

router.get("/getBooksData", BookController.getBooksData)

router.post("/createBook", BooksController.createBooks)
router.get("/allBookList", BooksController.allBooksList)
router.post("/yearDetails", BooksController.yearDetails)
router.post("/particularBooks", BooksController.particularBooks)
router.get("/priceDetails", BooksController.priceDetails)
router.get("/randomBooks", BooksController.randomBooks)

module.exports = router;