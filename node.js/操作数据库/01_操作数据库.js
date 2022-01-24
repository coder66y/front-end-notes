// 1.导入数据库
const mysql = require('mysql');
// 2.建立与mysql数据库的连接关系
const db = mysql.createPool({
  host: '127.0.0.1', // 数据库的ip地址
  user: 'root', // 数据库的登录账号
  password: 'admin123', // 数据库的登录密码
  database: 'my_db_01', // 指定要操作的数据库
})
// 3.测试是够可以正常工作
// db.query('select 1', (err, results) => {
//   if(err){
//     return console.log(err.message);
//   }
//   console.log(results);
// })

// 4.插入数据
// 插入到数据表中的数据对象
// const user = {username: '66y', password: 'admin123',};
// // 待执行的sql语句，英文的 ? 表示占位符。
// const sqlStr = 'insert into users (username, password) values(?, ?)';

// // 使用数组的形式，依次为占位符指定具体的值
// db.query(sqlStr, [user.username, user.password], (err, results) => {
//   if(err){return console.log(err.message);}
//   if(results.affectedRows === 1){ console.log('插入数据成功'+results);}
// })

// // 5.查询数据
// // 查询插入的结果
// db.query('select * from users', (err, results) => {
//   if(err){
//     return console.log(err.message);
//   }
//   // 如果执行的是select查询语句，则得到的结果是一个数组
//   console.log(results);
// })

// 6.快速插入数据的方法
// const user = {username: '66e', password: 'admin123',};
// const sqlStr = 'insert into users set ?';

// db.query(sqlStr, user, (err, results) => {
//   if(err){
//     return console.log(err.message);
//   }
//   if(results.affectedRows === 1){console.log('插入成功');}
// })

// db.query('select * from users', (err,results) => {
//   if(err){return console.log(err.message);}
//   console.log(results);
// })

// // 7.更新数据
// const user = {id: 8, username: 'aaa', password: '123456'};
// const sqlStr = 'update users set username=?, password=? where id=?';
// db.query(sqlStr, [user.username, user.password, user.id], (err, results) => {
//   if(err) {
//     return console.log(err.message);
//   }
//   if(results.affectedRows === 1){ 
//     console.log('更改成功');
//   }
// })
// 8.快速更新数据
// const user = {id: 8, username: 'abc', password: '123456'};
// const sqlStr = 'update users set ? where id=?';
// db.query(sqlStr, [user, user.id], (err, results) => {
//   if(err) {
//     return console.log(err.message);
//   }
//   if(results.affectedRows === 1){ 
//     console.log('更改成功');
//   }
// })

// 9.删除内容
// db.query('delete from users where id=?', 6, (err, results) => {
//   if(err) return console.log(err.message);
//   console.log(results);
// })
// 10.标记删除
db.query('update users set status=? where id=?', [1, 6], (err, results) => {
  if(err) return console.log(err.message);
  console.log(results);
})