const express = require('express');
const router = express.Router();
const intro = require('./introduction')
const employee = require('./employee')
const _ = require('underscore')
const lodash = require('lodash')
const logg = require("../logger/logger.js")
const help = require("../util/helper.js")
const valid = require("../validator/formatter.js")

router.get('/test-me', function (req, res) {
    console.log("email from introduction module", intro.myEmail)
    intro.myFunction('Sabiha')
    console.log("email from employee module", employee.myEmail)

    const days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"]
    let result = _.first(days, 4)
    console.log(`Result from underscore function is ${result}`)

    console.log(logg.batchName)
    // ***
    console.log(help.date)
    console.log(help.name)
    console.log(help.myData)
    // ***
    console.log(valid.greeting)
    console.log(valid.trim)
    console.log(valid.result)
    console.log(valid.output)
    // ***
    const arr = ["January", "Febuary", "March", "April", "May", "June", "July", "August", "September", "Octuber", "November", "December"]
    let result1 = lodash.chunk(arr, [size = 4]);
    console.log(result1)

    const getOdd = [3, 5, 7, 9, 11, 13, 15, 17, 19, 21]
    let findOdd = lodash.tail(getOdd);
    console.log(findOdd)

    const arr1 = [1, 4, 7, 8]
    const arr2 = [5, 3, 4, 6]
    const arr3 = [1, 2, 9, 5]
    const arr4 = [7, 1, 12, 31]
    let newArr = lodash.union(arr1, arr2, arr3, arr4);
    console.log(newArr)

    const array = [['horror', 'The Shining'], ['drama', 'Titanic'], ['thriller', 'Shutter Island'], ['fantasy', 'Pans Labyrinth']];
    let arrToObj = lodash.fromPairs(array);
    console.log(arrToObj)

    res.send('any dummy text')
});


router.get('/test-you', function(req, res){
    console.log("I am here")
    res.send("very important text")
})


module.exports = router;