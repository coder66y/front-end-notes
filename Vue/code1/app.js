import express from 'express';
import userRouter from './user_router/user_router.js';

const app = express();

 
app.use('/api', userRouter);

app.listen(70, () => {
  console.log('http://127.0.0.1:70');
})