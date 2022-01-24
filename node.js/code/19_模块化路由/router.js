// 1.导入express
const express = require('express');
// 2.创建路由对象
const router = express.Router();


// 3.挂载具体的路由
router.get('/', (req, res) => {
  res.send('这是get请求');
})
router.post('/', (req, res) => {
  res.send('这是post请求');
})

// 4.暴露路由对象
module.exports = router;