const express = require('express');
const router = express.Router();

const authorController= require("../controllers/authorController")
const bookController= require("../controllers/bookController")

// *** 
const newBook_Author_PublisherController= require("../controllers/newBook_Author_PublisherController")

router.get("/test-me", function (req, res) {
    res.send("My first ever api!")
})

router.post("/createAuthor", authorController.createAuthor  )

router.get("/getAuthorsData", authorController.getAuthorsData)

router.post("/createBook", bookController.createBook  )

router.get("/getBooksData", bookController.getBooksData)

router.get("/getBooksWithAuthorDetails", bookController.getBooksWithAuthorDetails)

// ***
router.post("/createBooks", newBook_Author_PublisherController.createBooks)
router.post("/create_Books", newBook_Author_PublisherController.create_Books)
router.post("/creatingBooks", newBook_Author_PublisherController.creatingBooks)
router.get("/getBooksWithAuthorAndPublisherDetails", newBook_Author_PublisherController.getBooksWithAuthorAndPublisherDetails)
router.put("/updateBooks", newBook_Author_PublisherController.updateBooks)
router.put("/update_Books", newBook_Author_PublisherController.update_Books)

module.exports = router;