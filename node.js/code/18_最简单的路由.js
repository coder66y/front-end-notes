const express = require('express');
const app = express();

// 挂载路由
app.get('/', (req, res) => {
  res.send('get请求');
})

app.post('/', (req, res) => {
  res.send('post请求');
})
app.listen(80, () => {
  console.log("该服务器在http://127.0.0.1:80上");
})