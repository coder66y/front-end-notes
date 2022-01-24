const express = require('express');
const app = express();
const cors = require('cors');

app.use(express.urlencoded({extended: false}));
app.use(cors());

const apirouter = require('./27_编写接口')
app.use(apirouter);



app.listen(80, () => {
  console.log('http://12.0.0.1:80');
})