import db from '../db/index.js';
export  async function getAllUsers(req, res) {
  try{
    const [rows] = await db.query('select * from ev_user ');
    res.send({
      status: 0,
      msg: '获取成功',
      data: rows,
    })
  }catch (err) {
    res.send({
      statu: 1,
      msg: '获取用户列表数据失败',
      desc: err.message,
    })
  }
}