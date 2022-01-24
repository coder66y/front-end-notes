const { query } = require('express');
const express = require('express');
const { contentType } = require('express/lib/response');

const apiRouter = express.Router();

apiRouter.get('/:id', (req, res) => {
  const query = req.query;
  res.send({
    status: 0,  // 状态：0 表示成功，1 表示失败
    msg: 'GET请求成功',
    data: query,
  })
})

apiRouter.post('/', (req, res) => {
  const body = req.body;
  res.send({
    status: 0,  // 状态：0 表示成功，1 表示失败
    msg: 'POST请求成功',
    data: body,
  })
})

module.exports = apiRouter;