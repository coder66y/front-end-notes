const fs = require('fs');

// 参数1：写入文件的存放路径
// 参数2：写入文件的编码格式，一般为utf-8
// 参数3：回调函数，拿到写入成功或者失败的结果

// 如果文件写入成功 err = null
// 如果文件写入失败 则err的值为错误对象
fs.writeFile('./files/2.txt', 'hello nodejs','utf-8', function(err){
  if(err === null){
    return console.log("写入成功");
  }
  console.log("写入失败"+err.message);
})

fs.writeFile('F:/files/22.txt', 'hello nodejs','utf-8', function(err){
  if(err === null){
    console.log("写入成功");
  }
  else{
    console.log("写入失败,错误原因如下:"+err.message);
  }
})