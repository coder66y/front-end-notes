const http = require('http');
const server = http.createServer();
server.on('request', (req, res) => {
  const str = '您的访问地址为 ' + req.url + ' 您的访问对象为 ' + req.method;
  // const str = `您的访问地址为${req.url},您的访问对象为${req.method}`;
  // res.end()将内容响应给客户端
  res.setHeader('Content-Type', 'text/html; charset=utf-8');
  res.end(str);
  console.log(str);
})
server.listen(80, () => {
  console.log('Server running at http://127.0.0.1:80');
})