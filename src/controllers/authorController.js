const authorModel  = require("../models/authorModel");
const jwt = require("jsonwebtoken");
const validation = require("../validator/validation");
let {isValidEmail} = validation;

//post Api for creating author >>>

const createAuthor = async function (req, res) {
try {
const data = req.body;
if (Object.keys (data).length == 0) {
return res.status (400).send({ status: "false", message: "All fields are mandatory" });
}
let {email} = data;

      if (!isValidEmail (email)) {
        return res.status (400).send({status: "false", message: "provide a valid emailId"});
      }
      let checkEmail = await authorModel.findOne({email: email});
      if(checkEmail) {
        return res.status (400).send({status: false, msg: "email is already registered "});
      }
      const result = await authorModel.create (data);
      res.status (201).send({ status: true, msg: "new author is created", data: result });
    }

    catch (err) { I
      return res.status (500).send({ msg: err.message });
    }
}
 
//________post api: Login author

let loginAuthor = async function (req, res) {
  try {
  let email = req.body.userName;
  let password = req.body.password;
  if (Object.keys (req.body).length == 0) { // Object.keys () array of keys will return
  return res.status (400).send({status: false, message: "Please provide email and password"});
  }
  let checkData = await authorModel.findOne({ email: email, password: password });
if (!checkData) {
return res.status (400).send({status: false,msg: "email or the password is not correct"})
}
let token = jwt.sign(
  {
    userId: checkData._id.toString()
  },
  "functionup-project-very-secret-key"
);
res.setHeader("x-auth-token", token);
res.send({ status: true, token: token });
}catch (err) {
  return res.status (500).send({ msg: err.message });
}
}



module.exports.createAuthor=createAuthor
module.exports.loginAuthor=loginAuthor

