// 1.1导入 path 文件模块
const path = require('path');
// 1.2导入 fs 文件模块
const fs= require('fs');

// 1.3匹配style标签的正则
// 其中 \s 表示空白字符 \S 表示非空白字符 * 表示匹配任意次
const regStyle = /<style>[\s\S]*<\/style>/;

// 1.4匹配script标签的正则
const regScript = /<script>[\s\S]*<\/script>/;

// 2.1使用fs模块读取需要被处理的html文件
fs.readFile(path.join(__dirname,'./index.html'), 'utf-8', function(err, dataStr) {
  if(err) {
    // 2.2 读取失败
    return console.log("读取错误，错误原因为: "+err.mesaage);
  }
  // 2.3 读取成功
  // console.log("读取成功");
  resolveCSS(dataStr);
  resolveJS(dataStr);
})


// 3.1定义 resolveCSS() 方法
function resolveCSS(htmlStr) {
  const r1 = regStyle.exec(htmlStr);
  // 3.3 将提取出来的样式字符串 ，进行字符串的 replace 替换

  const newCSS = r1[0].replace('<style>', '').replace('</style>','');
  // console.log(newCSS);
  // 3.4将提取处理的css文件写入css文件夹里面的.css文件里
  fs.writeFile(path.join(__dirname,'./css/index.css'), newCSS, 'utf-8', function(err) {
    if(err) {
      return console.log("读取错误，错误原因为: "+err.mesaage);
    }
    console.log('在 '+__dirname+'/css 地址, 写入样式成功');
  })
}

// 4.定义 resolveJS()方法
function resolveJS(htmlStr) {
  const r2 = regScript.exec(htmlStr);
  // 3.3 将提取出来的样式字符串 ，进行字符串的 replace 替换

  const newJS = r2[0].replace('<script>', '').replace('</script>','');
  // console.log(newCSS);
  // 3.4将提取处理的css文件写入css文件夹里面的.css文件里
  fs.writeFile(path.join(__dirname,'./JS/index.js'), newJS, 'utf-8', function(err) {
    if(err) {
      return console.log("读取错误，错误原因为: "+err.mesaage);
    }
    console.log('在 ' + __dirname + '/JS 地址,写入JS成功');
  })
}


