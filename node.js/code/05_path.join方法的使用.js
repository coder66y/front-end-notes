const path = require('path');

// const pathStr = path.join('/a','/b/c','/d', '/e');
// console.log(pathStr); //  \a\b\c\d\e

// ../ 会抵消前面的路径
const pathStr = path.join('/a','/b/c','../','/d', '/e');
console.log(pathStr); //  \a\b\d\e