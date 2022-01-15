const fs = require('fs');
fs.readFile(__dirname+'/files/成绩单横排.txt', 'utf-8', function(err,dataStr){
  if(err){
    return console.log('读取失败'+err.massage);
  }
  // console.log('读取成功'+dataStr);

  // 把成绩分割
  let arr = dataStr.split('  ');
  const arrNow = [];
  arr.forEach(item => {
    arrNow.push(item.replace(' ', ': '));
  })
  // console.log(arrNow);
  // console.log(newStr);
  const newStr = arrNow.join('\r\n');
  // 写入成绩单
  fs.writeFile(__dirname+'/files/成绩单竖排.TXT', newStr, function(err){
    if(err){
      return console.log('写入失败, 失败原因如下:' + err.massage);
    }
    console.log('写入成功，你真棒!');
  })
})

