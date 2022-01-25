import mysql from 'mysql2';

const db = mysql.createPool({
  host: '127.0.0.1',
  port: '3306',
  user: 'root',
  password: 'admin123',
  database: 'my_db_01',
})

// 必须加上 .promise(),否则不支持es6模块
export default db.promise();