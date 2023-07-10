
var express = require('express');
var router = express.Router();
let User = require('../models/user.js');
let bcrypt = require('bcrypt');


/* GET users listing. */
router.post('/register', async function(req, res , next) {
 
  try{

    const {name , surname , middlename , password, location } = req.body


    const salt = await bcrypt.genSalt(10);

    const hashPassword = await bcrypt.hash(password , salt);

    const authUser = new User({
      name,
      surname,
      middlename,
      password:hashPassword,
      location,
    })

    await authUser.save()

    res.status(200).json({message:'User registered Sucessfully' , authUser});


  }

  catch{
    (err) => {
      res.status(500).json({message:'Internal Server Error' , err})
    }

  }

  // next()
  
  
  // const authUser =  new User({
  //   name: req.body.name,
  //   surname:req.body.surname,
  //   middlename:req.body.middlename,
  //   password:req.body.password,
  //   location: req.body.location,
  // })

  // authUser.save()

  //  res.send({status:200 , message:'Success' , user:authUser});
});


router.post('/login' , async (req , res) => {
  try{
    const{name , password } = req.body;
    //find the user in the Database

    const user = await User.find({name});

    if(!user){
      return res.send({status:401 , message:'User not found'})
    }

    //Compare the provided password with the stored hash password

    const isMatch = await bcrypt.compare(password, user.password);

    if(isMatch){
      res.send({status:200 , message:'User Logged in Successfully', user})
    }
    else{
      res.send({status:401 , message:'Invalid Login Details'})
    }
  
  }
  catch{
    (err) => {
      console.log(err)
      res.send({status:500 , message:'Internal Server Error' })
    }

  }
});



module.exports = router;
