// 1.导入http模块
const http = require('http');
// 2.创建web服务器
const server = http.createServer();
// 3.为服务器绑定request事件，监听客户端的请求
server.on('request', function(req, res) {
  // req是请求对象 包含了与客户端有关的相关数据和属性
  const url = req.url;
  const method = req.method;
  const str = '您的访问地址是：Your request url is ' + url + ', and request method is ' + method;
  console.log(str);
  // 调用res.end()
  res.end(str);

  // console.log('Some one visit our web server');
})

// 4.启动服务器
server.listen(80, function() {
  console.log('server running at http://127.0.0.1:80');
})

