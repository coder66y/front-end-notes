// 1.导入express

const express = require('express');
// 2.创建 web 服务器
const app = express();

app.use(express.static('./07_clock-case'))
// 4.监听客户端的get和post请求
 app.get('/', (req, res) => {
  //  向客户端响应一个json对象
  //  res.send({"name": "66y",});
  //  通过 req.query 可以获取到客户端发送过来的 查询参数
  // 注意：默认情况下，req.query是一个空对象
   res.send(req.query);
 })

 app.get('/user/:id', (req, res) => {
  res.send(req.params);
 })

 app.post('/', (req, res) => {
  //  向客户端响应一串文本字符串
   res.send('请求成功', req.query);
 })
// 3. 启动 web 服务器
app.listen(80, () => {
  console.log('express server is running at http://127.0.0.1:80');
})