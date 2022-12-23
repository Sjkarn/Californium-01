const express = require('express');
const bodyParser = require('body-parser');
const route = require('./routes/route.js');
const { default: mongoose } = require('mongoose');
const app = express();

mongoose.set('strictQuery', true);

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


mongoose.connect("mongodb+srv://SAURABH:Soa4GdK4yRvlVN5i@cluster0.umtgp.mongodb.net/Saurabh-DB?retryWrites=true&w=majority", {
    useNewUrlParser: true
})
.then( () => console.log("MongoDb is connected"))
.catch ( err => console.log(err) )

app.use (
    function (req, res, next) {
        console.log ("inside GLOBAL MW");
        next();
  }
  );
  
  const assignmentMW= function (req, res, next) {
    var currentdate = new Date(); 
    var datetime =  currentdate.getDate() + " "
                    + (currentdate.getMonth()+1)  + " " 
                    + currentdate.getFullYear() + "  "  
                    + currentdate.getHours() + ":"  
                    + currentdate.getMinutes() + ":" 
                    + currentdate.getSeconds();

    let ip= req.ip
    let url= req.originalUrl
    console.log(`${datetime}  ${ip}  ${url}`)
    next()    
}

app.use( assignmentMW )

app.use('/', route);


app.listen(process.env.PORT || 3000, function () {
    console.log('Express app running on port ' + (process.env.PORT || 3000))
});
