import fs from 'fs';
function getFile (fpath) {
  return new Promise(function (resolve, reject) {
    fs.readFile(fpath, 'utf-8', (err, dataStr) => {
      if(err) return reject(err); // 读取失败，调用“失败的回调函数”
      resolve(dataStr); // 读取成功，调用成功的回调函数
    })
  })
}

getFile('./files/1.txt').then((r1) => {console.log(r1);}, (err1) => {console.log(err1.message);})