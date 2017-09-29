var express = require('express');
var router = express.Router();

var User = require('../controller/user.vc')
/* GET users listing. */

router.use((req,res,next)=>{
  next()
})

router.route('/register')

    .post((req,res)=>{
      User.register(req.body,res)
    })
    .get((req,res)=>{
      User.getUsers(res)
    })

router.route('/login')

    .post((req,res)=>{
      User.login(req.body,res)
    })

module.exports = router;
