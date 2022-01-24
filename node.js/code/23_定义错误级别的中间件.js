const express = require('express');
const app = express();

// 定义错误级别的中间件，捕获整个项目的错误情况，从而防止整个项目的奔溃


app.get('/', (req, res) => {
  // 人为制造错误
  throw new Error('服务器内部发生错误');
  res.send('Home page');
})

// 错误处理中间件必须注册在所有路由之后
app.use((err,req, res, next) => {
  console.log('error exist '+err.message);
  res.send('error ' + err.message);
  })

app.listen(80, () => {
  console.log('http://127.0.0.1:80');
})