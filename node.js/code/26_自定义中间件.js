const express = require('express');
const app = express();

// 导入内置的querystring模块
const querystring = require('querystring');

// 1.自定义中间件
app.use((req, res, next) => {
  // 监听req的data事件
  let str = '';
  req.on('data', (chunk) => {
    str += chunk;
  })
  // 监听req的end事件
  req.on('end', () => {
    // str 中存放的是完整的请求体数据
    const body = querystring.parse(str)
    console.log(str);
    console.log(body);
    req.body = body;
  })
  next();
})

app.post('/', (req, res) => {
  console.log(req.body);
  res.send(req.body);
})

app.listen(80, () => {
  console.log('http://127.0.0.1');
})