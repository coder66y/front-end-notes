// 导入自定义时间
const  time = require('./14_dateFormat');

// 调用方法
const dt = new Date();
console.log(dt);

console.log(time.dateFormat(dt));
