const express = require('express');
const router = express.Router();
const intro = require('./introduction')
const employee = require('./employee')
const _ = require('underscore')
const mentorModule = require('../abc/xyz/myModule'); 
const req = require('express/lib/request');
const { route } = require('express/lib/application');


router.get("/profile-details", function(req, res){
    // Write the LOGIC here
    res.send('dummy response')
})

router.get('/test-me', function (req, res) {
    console.log("email from introduction module", intro.myEmail)
    intro.myFunction('Sabiha')
    console.log("email from employee module", employee.myEmail)

    const days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"]
    let result = _.first(days, 4)
    console.log(`Result from underscore function is ${result}`)
    console.log(`The mentor of the day is ${mentorModule.mentor}`)

    res.send('any dummy text from route handler 1')
});


router.get('/test-me', function(req, res){
    console.log("I am here")
    res.send("any dummy text from route handler 2")
})

router.get('/students', function (req, res){
    let students = ['Sabiha', 'Neha', 'Akash']
    res.send(students)
})

// PATH Param example
router.get('/student-details/:name', function(req, res){
    /*
    params is an attribute inside request that contains 
    dynamic values.
    This value comes from the request url in the form of an 
    object where key is the variable defined in code 
    and value is what is sent in the request
    */

    let requestParams = req.params

    // JSON strigify function helps to print an entire object
    // We can use many ways to print an object in Javascript, JSON stringify is one of them
    console.log("This is the request "+ JSON.stringify(requestParams))
    let studentName = requestParams.name
    console.log('Name of the student is ', studentName)
    
    res.send('Dummy response')
})

// PATH Param example
router.get("/profile/:name", function(req, res){
    console.log('Printing the request to find out wjere name is stored',req.params)
    console.log('user name is',req.params.name)
    //console.log(`User requesting for profile is ${name}`)
    res.send("dummy details")
})

// Query Param example
router.get("/shoes", function(req, res){
    console.log("The filter options for shoes are -",req.query)
    //req.query.size
    //req.query.brand
    res.send("dummy shoes response")
})

// *** 1)
router.get('/movies-list',function (req,res){
    let moviesList = ['The Shining','Titanic','Shutter Island','Pans Labyrinth','John Wick','Harry Potter','Pirates Of The Caribbean']
    res.send(moviesList)
})
// *** 2)
router.get('/movies/:indexNumber',function (req,res){
    let movies = ['The Shining','Titanic','Shutter Island','Pans Labyrinth','John Wick','Harry Potter','Pirates Of The Caribbean']
    console.log(req.params.indexNumber)
    let movieIndex = req.params.indexNumber
    let requiredMovie = movies[movieIndex]
    res.send(requiredMovie)
})
// *** 3)
router.get("/movies-list/:indexNum",function (req,res){
    let movies = ['Rang de basanti', 'The shining', 'Lord of the rings', 'Batman begins']
    console.log(req.params.indexNum)
    let movieIndex = req.params.indexNum
    if (movieIndex<0 || movieIndex>=movies.length){
        return res.send('The index value is not correct,Pls check it')
    }
    let requiredMovie = movies[movieIndex]
    res.send(requiredMovie)
})
// *** 4)
router.get("/films", function(req, res){
    const films = [ {
        "id": 1,
        "name": "The Shining"
       }, {
        "id": 2,
        "name": "Incendies"
       }, {
        "id": 3,
        "name": "Rang de Basanti"
       }, {
        "id": 4,
        "name": "Finding Nemo"
       }]
       res.send(films) 
})
// *** 5)
router.get("/films/:filmId", function(req, res){
    const films = [ {
        "id": 1,
        "name": "The Shining"
       }, {
        "id": 2,
        "name": "Incendies"
       }, {
        "id": 3,
        "name": "Rang de Basanti"
       }, {
        "id": 4,
        "name": "Finding Nemo"
       }]

       let filmId = req.params.filmId
       console.log(filmId);
       for(let index = 0; index < films.length; index++){
           let film = films[index]
           if(film.id == filmId) {
            return res.send(film)
           }
       }
       res.send("No movie exists with this id")
})
 
// *** 1)
 router.get("/sol1", function (req, res) {
    let arr= [1,2,3,4,5,7,8,9]
    let missingNumber = (arr.length+1)*(arr.length+2)/2;
    for(let i = 0; i < arr.length; i++) {
    missingNumber = missingNumber - arr[i];
}
res.send(  { data: missingNumber  }  );
});
// *** 2)  
  router.get("/sol2", function (req, res) {
    let arr= [33, 34, 35, 37, 38, 39]
    let len= arr.length
    let total = 0;
    for (let i in arr) {
        total += arr[i];
    }
    let firstDigit= arr[0]
    let lastDigit= arr.pop()
    let consecutiveSum= (len + 1) * (firstDigit+ lastDigit ) / 2
    let missingNumber= consecutiveSum - total
   
    res.send(  { data: missingNumber  }  );
  });

module.exports = router;