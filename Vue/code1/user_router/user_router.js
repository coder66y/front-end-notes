import express from 'express';
import {getAllUsers} from '../controller/user_ctrl.js';

const router = new express.Router();

router.get('/user', getAllUsers);

export default router;