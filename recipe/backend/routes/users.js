const router = require('express').Router();
let User = require('../models/user.model.js');

// router.route('/').get((req, res) => {
//   User.find()
//     .then(users => res.json(users))
//     .catch(err => res.status(400).json('Error: ' + err));
// });
router.route('/getlist').post((req, res) => {
  console.log("is this hit?");

  const { body } = req;
  let {
    email,
  } = body;
  
  
  User.find({
    email: email
  }, (err, users) => {
    if (err) {
      return res.send({
        success: false,
        message: 'Error: Server error'
      });
    } else {
      return res.send({
        success: true,
        message: users[0]
      });
    }



});
});

router.route('/auth').post((req, res) => {
  console.log("is this hit?");

  const { body } = req;
  let {
    fname,
    lname,
    email,
    password,
    userType
  } = body;
  
  
  if (!email) {
    return res.send({
      success: false,
      message: 'Error: Email cannot be blank.'
    });
  }
  if (!password) {
    return res.send({
      success: false,
      message: 'Error: Password cannot be blank.'
    });
  }

  email = email.toLowerCase();
  email = email.trim();

  // Steps:
  // 1. Verify email doesn't exist
  // 2. Save
  User.find({
    email: email
  }, (err, users) => {
    if (err) {
      return res.send({
        success: false,
        message: 'Error: Server error'
      });
    } else if (users.length != 1) {
      return res.send({
        success: false,
        message: 'Error'
      });
    }
    const user = users[0];

    if (!user.validPassword(password)) {
      return res.send({
        success: false,
        message: 'Error: Invalidaaaaa'
      });
    }
    else{
      return res.send({
        success: true,
        message: 'Valid sign in',
        
      });
    }
});
});




router.route('/add').post((req, res) => {
  console.log("is this hit?");

  const { body } = req;
  let {
    fname,
    lname,
    email,
    password,
    userType
  } = body;
  
  console.log(email);
  if (!email) {
    return res.send({
      success: false,
      message: 'Error: Email cannot be blank.'
    });
  }
  if (!password) {
    return res.send({
      success: false,
      message: 'Error: Password cannot be blank.'
    });
  }

  email = email.toLowerCase();
  email = email.trim();

  // Steps:
  // 1. Verify email doesn't exist
  // 2. Save
  User.find({
    email: email
  }, (err, previousUsers) => {
    if (err) {
      return res.send({
        success: false,
        message: 'Error: Server error'
      });
    } else if (previousUsers.length > 0) {
      return res.send({
        success: false,
        message: 'Error: Account already exist.'
      });
    }

    // Save the new user
    const newUser = new User();
    newUser.fname = fname;
    newUser.lname = lname;
    newUser.userType = userType;
    newUser.email = email;
    newUser.password = newUser.generateHash(password);
    newUser.save((err, user) => {
      if (err) {
        return res.send({
          success: false,
          message: 'Error: Server error'
        });
      }
      return res.send({
        success: true,
        message: 'Signed up'
      });
    });
  });


});

router.route('/favorite').post((req, res) => {


  const { body } = req;
  let {
    email,
    recipe
  } = body;
  
  console.log(email)
  console.log(recipe)

  User.findOneAndUpdate({email: email}, {$push: {recipelist:recipe}},
    function (error, success) {
        if (error) {
            console.log(error);
        } else {
            console.log(success);
        }
    })
 
});





module.exports = router;