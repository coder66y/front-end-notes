const path = require('path');

// 可以获得文件名
const fpath = path.basename('/b/c/a/index.html');
console.log(fpath); // index.html


// 输入第二个参数，可以获得文件名部分
const fpathWithoutExt = path.basename('/b/c/a/index.html','.html');
console.log(fpathWithoutExt);

console.log(path.extname('/a/s/df/f/index.html')); // .html