const itheima = require('./itheima_tools');
 console.log(itheima);


let dtStr = itheima.dateFormat(new Date());
console.log(dtStr);

const htmlStr = '<h1>这是h1标签</h1>';
const str = itheima.htmlEscape(htmlStr);
console.log(str);
