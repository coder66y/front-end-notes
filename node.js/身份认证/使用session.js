const express = require('express');
const app = express();

// 安装并配置session
const session = require('express-session');
app.use(session({
  secret: 'itheima', // k可以是任意字符串
  resave: false, // 固定写法
  saveUninitialized: true, // 固定写法
}))

// 向session中存入数据
app.post('/api/login', (req, res) => {
  if(req.body.username !== 'admin' || req.body.password !== '000000') {
    return res.send({ status: 1, msg: '登陆失败'})
  }
  req.session.user = req.body;
  req.session.islogin = true;
  res.send({status: 0, msg: '登陆成功'})
})

// 获取用户姓名的接口
app.get('/api/username', (req, res) => {
  if(!req.session.islogin) {
    return res.send({ status: 1, msg: '登陆失败'});
  }
  res.send({
    status: 0,
    msg: '登陆成功',
    username: req.session.user.username,
  })
})

// 清空信息
app.post('/api/logout', (req, res) => {
  req.session.destroy();
  ses.send({
    status: 0,
    msg: '退出登录成功',
  })
})