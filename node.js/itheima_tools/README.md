# 安装
```
npm install itheima-tools

```

# 导入

```js
const itheima = require('itheima-tools');
```

# 格式化时间

```js
const dtStr = itheima.dateFormat(new Date());
console.log(dtStr); // 2022年01月18日  星期二  13:01:00
```

# 转义html中特殊字符
```js
const htmlStr = '<h1>这是h1标签</h1>';
const str = itheima.htmlEscape(htmlStr);
console.log(str); // &lt;h1&gt;这是h1标签&lt;/h1&gt;
```
# 开源协议
ISC
