# 一、数据库

## 1.数据库概念

![](img/数据库.png)

## 2.数据库分类

![](img/常见数据库及分类.png)

## 3.传统型数据库的数据组织结构

从小到大分为数据库（database），数据表(table），数据行（row)，字段（field），由这四部分组成

### 3.1 实际开发中，库，表，行，字段的关系

![](img/传统数据库数据组织结构.png)

## 4.安装并配置MySQL

![](img/MySQL组成.png)

### 4.1 看着视频安装

官网下载，按照视屏步骤安装即可，不用特意安装两个软件

### 4.2 MySQL Workbench 主界面

![](img/MySQL Workbench主界面.png)

### 4.3 创建数据库

![](img/创建数据库.png)

### 4.4 创建数据表

![](img/创建数据表.png)

### 4.5 向表中写入数据

![](img/向表中写入数据.png)

## 5.使用sql语言管理数据库

### 5.1 什么是sql

![](img/sql概念.png)

### 5.2 sql的作用

![](img/sql的作用.png)

### 5.3 sql的学习目标

![](img/sql学习目标.png)

## 二、 MySQL 的基本使用

## 1. select 语句

sql语言中的关键字不区分大小写，但是必须加分号隔开各个语句，select语句用于从表中查询数据，执行的结构被保存在一个结果表中，语法格式如下：

```sql
-- 通过 * 把所有的user表中的数据查询出来
select * from users;
-- 把password和uername查询出来，列与列之前用逗号隔开
select password, username from users;
```

## 2. insert into语句

用于向数据表中插入新的数据行

```sql
-- 向表中插入新数据，username的值为tony stark, password的值为098123
insert into users (username, password) values ('tony stark', '098123');
-- 查询一下表格，看是否插入成功
select * from users;
```

## 3. update 用于修改表中的数据

update 表名称 set 列名称 = 新值 where 列名称 = 某值

```sql
-- 将users表中id为3的用户密码更改为123456；
update users set password = '456456' where id = 3;
select * from users;
```

```sql
-- 更新多个值
update users set password='123456', status=1 where id =2;
```

## 4. delete 删除表中内容

```sql
-- 一定要加where 否则容易删掉整张表格
delete from users where id=3;

```

## 5. where 子句

where语句用于限定选择的标准

![](img/where子句.png)

## 6. order by 子句

![](img/order by 子句.png)

![](img/升序排序.png)

![](img/降序排序.png)

![](img/多重排序.png)

## 7. as 子句

![](img/as 设置别名.png)

## 8. count (*)

![](img/count语句.png)

## 9. and or

![](img/and or 运算符.png)

# 三、在项目中操作 MySQL

## 1.安装 MySQL 模块

```powershell
npm i mysql
```

## 2.配置mysql

```js
// 1.导入数据库
const mysql = require('mysql');
// 2.建立与mysql数据库的连接关系
const db = mysql.createpool({
  host: '127.0.0.1', // 数据库的ip地址
  user: 'root', // 数据库的登录账号
  password: 'admin123', // 数据库的登录密码
  database: 'my_db_01', // 指定要操作的数据库
})
```

## 3.测试mysql模块是否可以正常工作

```js
db.query('select 1', (err, results) => {
  if(err){
    return console.log(err.message);
  }
  console.log(results);
})
```

## 4.查询和插入数据

```js
// 插入到数据表中的数据对象
const user = {username: '66y', password: 'admin123',};
// 待执行的sql语句，英文的 ? 表示占位符。
const sqlStr = 'insert into users (username, password) values(?, ?)';

// 使用数组的形式，依次为占位符指定具体的值
db.query(sqlStr, [user.username, user.password], (err, results) => {
  if(err){return console.log(err.message);}
  if(results.affectedRows === 1){ console.log('插入数据成功'+results);}
})

// 查询插入的结果
db.query('select * from users', (err, results) => {
  if(err){
    return console.log(err.message);
  }
  // 如果执行的是select查询语句，则得到的结果是一个数组
  console.log(results);
})
```

**结果**

```powershell
PS F:\前端\node.js\操作数据库> node .\01_操作数据库.js
[
  RowDataPacket {
    id: 1,
    username: 'zs',
    password: '123456',
    status: 0
  },
  RowDataPacket {
    id: 2,
    username: 'ls',
    password: '123456',
    status: 1
  },
  RowDataPacket {
    id: 4,
    username: '66y',
    password: 'admin123',
    status: 0
  }
]
ER_DUP_ENTRY: Duplicate entry '66y' for key 'users.username_UNIQUE'
#因为之前已经插入过一次了
```

## 5.插入数据的便捷方式

```js
// 6.快速插入数据的方法
const user = {username: '66e', password: 'admin123',};
const sqlStr = 'insert into users set ?';

db.query(sqlStr, user, (err, results) => {
  if(err){
    return console.log(err.message);
  }
  if(results.affectedRows === 1){console.log('插入成功');}
})
// 查询插入结果
db.query('select * from users', (err,results) => {
  if(err){return console.log(err.message);}
  console.log(results);
})
```

## 6.更新数据

```js
// 7.更新数据
const user = {id: 8, username: 'aaa', password: '123456'};
const sqlStr = 'update users set username=?, password=? where id=?';
db.query(sqlStr, [user.username, user.password, user.id], (err, results) => {
  if(err) {
    return console.log(err.message);
  }
  if(results.affectedRows === 1){ 
    console.log('更改成功');
  }
})
```

## 7. 快速更新数据的方法

更新数据表时，如果数据对象的每一个属性和数据表的字段一 一对应，则可以使用以下方式快速更新数据

```js
const user = {id: 8, username: 'abc', password: '123456'};
const sqlStr = 'update users set ? where id=?';
db.query(sqlStr, [user, user.id], (err, results) => {
  if(err) {
    return console.log(err.message);
  }
  if(results.affectedRows === 1){ 
    console.log('更改成功');
  }
})
```

## 8.删除内容

```js
db.query('delete from users where id=?', 6, (err, results) => {
  if(err) return console.log(err.message);
  console.log(results);
})
```

## 9.标记删除

![](img/标记删除.png)

```js
db.query('update users set status=? where id=?', [1, 6], (err, results) => {
  if(err) return console.log(err.message);
  console.log(results);
})
```

# 四、前后端身份认证

## 1.web开发模式

### 1.1 基于服务器渲染的传统web开发模式

#### 1.1.1 概念

![](img/服务端渲染概念.png)

#### 1.1.2 优缺点

![](img/服务端渲染优缺点.png)

### 1.2 基于前后端渲染的新型web开发模式

![](img/前后端分类优缺点.png)

### 1.3 如何选择开发模式？

![](img/web开发模式.png)

## 2.身份认证

### 2.1 概念

![](img/身份认证.png)

### 2.2 为什么需要身份认证？

身份认证能够证明该人是所声称的人

### 2.3 不同开发模式下的身份认证

* 服务端渲染的web开发模式选择  **Session** 认证机制
* 前后端分离选择  **JWT** 认证机制

### 2.4 Session 认证机制

#### 2.4.1 http协议的无状态性

概念：客户端每次 http 请求都是独立的，连续多个请求之间没有直接的关系，服务器不会主动保留每次http请求的状态。

#### 2.4.2 如何突破这样的无状态性？

![](img/突破http无状态限制.png)

#### 2.4.3 Cookie

**Cookie** 是存储在用户浏览器中一段不超过4kb的字符串，由一个名称（Name ),一个值（value），和其他几个用于控制Cookie有效期，安全性，使用范围的可选属性组成的 

不同域名下的Cookie是独立的，每当客户端发起请求时，会自动把当前域名下的所有未过期的Cookie一起发送到服务器

**Cookie几大特性**

* 自动发送
* 域名独立
* 过期时限
* 4kb 限制

#### 2.4.4 Cookie在身份认证中的作用

![](img/cookie在身份认证中的作用.png)

#### 2.4.5 Cookie不具备安全性

![](img/cookie不具有安全性.jpg)

#### 2.4.6 提高身份认证安全性

![](img/提高身份认证的安全性.png)

#### 2.4.7 session工作原理

![](img/session工作原理.png)

## 2.5 在express中使用Session中间件

### 2.5.1 安装中间件

```powershell
npm i express-session
```

### 2.5.2 配置中间件

```js
const session = require('express-session');
app.use(session({
  secret: 'itheima', // k可以是任意字符串
  resave: false, // 固定写法
  saveUninitialized: true, // 固定写法
}))
```

### 2.5.3 向session存储数据

```js
// 向session中存入数据
app.post('/api/login', (req, res) => {
  if(req.body.username !== 'admin' || req.body.password !== '000000') {
    return res.send({ status: 1, msg: '登陆失败'})
  }
  req.session.user = req.body;
  res.send({status: 0, msg: '登陆成功'})
})

```

### 2.5.4 获取信息

```js
// 获取用户姓名的接口
app.get('/api/username', (req, res) => {
  if(!req.session.islogin) {
    return res.send({ status: 1, msg: '登陆失败'});
  }
  res.send({
    status: 0,
    msg: '登陆成功',
    username: req.session.user.username,
  })
})
```

### 2.5.5 清空session

调用req.session.destroy() 函数，即可清空服务器保存的session信息

```js
// 清空信息
app.post('/api/logout', (req, res) => {
  req.session.destroy();
  ses.send({
    status: 0,
    msg: '退出登录成功',
  })
})
```

### 2.5.6 session认证机制局限性



## 3. JWT 认证 （json Web Token)

### 3.1 jwt的工作原理

![](img/JWT工作原理.png)

### 3.2 jwt的组成部分

![](img/JWT的组成部分.png)

### 3.3 三部分的含义

![](img/三个部分的含义.png)

### 3.4 jwt使用方式

![](img/使用方法.png)

### 3.5 安装相关的包

![](img/安装jwt相关的包.png)

### 3.6 导入相关包

使用require方法

### 3.7 定义相关密钥

### 3.8 登录成功后生成jwt字符串

### 3.9 将jwt字符串还原为json对象

### 3.10 使用req.user获取用户信息

```js
app.get('/admin/getinfo', function (req, res) {
  // TODO_05：使用 req.user 获取用户信息，并使用 data 属性将用户信息发送给客户端
  console.log(req.user);

  res.send({
    status: 200,
    message: '获取用户信息成功！',
    data: req.user, // 要发送给客户端的用户信息
  })
})
```

### 3.11 捕获解析 JWT 失败后产生的错误

![](img/捕获jwt失败后的错误.PNG)





