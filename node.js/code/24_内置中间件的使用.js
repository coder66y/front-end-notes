const express = require('express');
const app = express();

// 可以解析以json格式传上来的请求体
app.use(express.json());
app.use(express.urlencoded({extended: false}));

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