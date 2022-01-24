const express = require('express');
const app = express();

// 定义一个最简单的中间件
const wm = function(req, res, next) {
  console.log('这是一个最简单的中间件');
  // 把流转关系，转交给下一个中间件或者路由
  next();
}

// 注册全局中间件
app.use(wm);

app.get('/', (req, res) => {
  res.send('home page');
})
app.get('/user', (req, res) => {
  res.send('user page');
})

app.listen(80, () => {
  console.log('http://127.0.0.1');
})