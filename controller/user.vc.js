var UserModel = require('../models/user.model')
var jwt = require('jsonwebtoken')

var User = new UserModel()
var methods = {
    register(dict, res) {
        User.phoneNumber = dict.phoneNumber
        User.password = dict.password
        return User.save().then(data => {
            res.send({ status: 200, message: '注册成功' })
        })
    },
    login(dict, res) {
        UserModel.findOne({ phoneNumber: dict.phoneNumber, password: dict.password }).then(data => {
            // let token = jwt.sign({ foo: 'bar' }, cert, { algorithm: 'RS256'});
            // console.log(token)
            let content = { msg: Date.now().toLocaleString() } // 要生成token的主题信息
            let secretOrPrivateKey = data.phoneNumber // 这是加密的key（密钥） 
            let token = jwt.sign(content, secretOrPrivateKey, {
                expiresIn: 60 * 60 * 24  // 24小时过期
            })
            res.send({ status: 200, message: '登陆成功',token:token})
        }, error => {
            res.send({ status: 201, message: '登陆失败' })
        })
    },
    getUsers(res){
        UserModel.findOne({phoneNumber:'15151965292'}).then(data=>{
            res.send(data)
        })
    },
}

module.exports = methods