const express = require('express');
const app = express();
const  time = require('./14_dateFormat');


// 定义一个最简单的中间件
const reqT = function(req, res, next) {
  // 为req对象挂载自定义属性
  req.requestTime = time.dateFormat(new Date());
  dt = time.dateFormat(new Date());
  // 把流转关系，转交给下一个中间件或者路由
  next();
}
// 注册全局中间件
app.use(reqT);

app.get('/', (req, res) => {
  res.send('主页请求于 ' + req.requestTime);
})
app.get('/user', (req, res) => {
  res.send('用户页请求于 ' + dt);
})

app.listen(80, () => {
  console.log('http://127.0.0.1');
})