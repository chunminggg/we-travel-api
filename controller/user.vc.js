var UserModel = require('../models/user.model')
var User = new UserModel()
var methods = {
    register(dict,res) {
        User.phoneNumber = dict.phoneNumber
        User.password = dict.password
        return User.save().then(data=>{
        res.send({status:200,message:'注册成功'})
      })
    }
}

module.exports = methods