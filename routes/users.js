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

module.exports = router;
