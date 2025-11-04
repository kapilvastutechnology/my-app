import express from 'express';
import { allUser, createUser, deleteUser, singleUser, updateUser } from '../controllers/userController.js';

const router = express.Router();

router.route('/api/users')
.get(allUser)
.post(createUser)

router.route('/api/users/:id')
.get(singleUser)
.patch(updateUser)
.delete(deleteUser)

export default router;