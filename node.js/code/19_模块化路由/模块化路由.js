// 1.导入express
const express = require('express');

const app = express();

// 2.导入路由模块
const router = require('./router');
// 3.注册路由模块
// app.use()注册全局中间件
// 以下语法添加了前缀
app.use('/router', router);

app.listen(80, () => {
  console.log('http://127.0.0.1:80');
})