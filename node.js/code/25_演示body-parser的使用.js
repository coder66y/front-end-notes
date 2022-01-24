const express = require('express');
const app = express();

// 导入中间件
const body_parser = require('body-parser');
// 注册中间件
app.use(body_parser.urlencoded({extend: false}));

app.post('/', (req, res) => {
  console.log(req.body);
  res.send('post ok');
})
app.post('/books', (req, res) => {
  console.log(req.body);
  res.send('post ok');
})

app.get('/', (req, res) => {
res.send('get ok');
})

app.listen(80, () => {
  console.log('http://127.0.0.1');
})