const http = require('http');
const fs = require('fs');
const path = require('path');
// 创建web服务器
const server = http.createServer();
server.on('request', (req, res) => {
  // 3.1 获取到客户端请求的url地址
  const url = req.url;
  console.log(url);console.log('----------');
  // 3.2 把请求的url地址映射为具体文件的存放路径
  // const fpath = path.join(__dirname, url);
  let fpath = '';
  if(url === '/'){
    fpath = path.join(__dirname, '/files/index.html')
  } else {
    fpath = path.join(__dirname, '/files', url);
  }

  // 4.1根据映射过来的文件路径读取文件内容
  fs.readFile(fpath, 'utf-8', (err, dataStr) => {
    if(err){
      return res.end('404 Not found!');
    }
    res.end(dataStr);
  })
})

// 启动web服务器
server.listen(80, () => {
  console.log('server listen at http://127.0.0.1:80');
})