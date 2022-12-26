const express = require('express');
const router = express.Router();
// const UserModel= require("../models/userModel.js")
const UserController= require("../controllers/userController")
const BookController= require("../controllers/bookController")
const commonMW = require ("../middlewares/commonMiddlewares")

const NewUserController= require("../controllers/newUserController")
const NewProductController = require("../controllers/newProductController")
const NewOrderController = require("../controllers/newOrderController")


router.get("/test-me", function (req, res) {
    res.send("My first ever api!")
})

router.post("/createBook", commonMW.abc, BookController.createBook  )
router.post("/basicRoute", commonMW.mid1, commonMW.mid2, commonMW.mid3, commonMW.abc, UserController.basicCode, commonMW.mid4)

router.post("/products", NewProductController.createProduct)
router.post("/users", NewUserController.createUser)
router.post("/orders", NewOrderController.createOrder)

module.exports = router;