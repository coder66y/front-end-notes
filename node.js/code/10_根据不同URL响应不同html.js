const  http = require('http');
const server = http.createServer();

server.on('request', (req, res) => {
  let content = '<h>404 Not found!</h>';
  const url = req.url;
  if(url === '/' || url === '/index.html'){
    content = '<h> 首页 </h>';
  } else if (url ==='/abort.html') {
    content = '<h1>关于页面</h1>';
  }

  res.setHeader('Content-Type', 'text/html; charset=utf-8');
  res.end(content);
})

server.listen(80, () => {
  console.log('server run at http://127.0.0.1:80');
})

