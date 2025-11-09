import express from 'express';
import { allUser, createUser, deleteUser, singleUser, updateUser } from '../controllers/userController.js';
import { notAllowed } from '../utils/notAllowed.js';
import { checkFile } from '../middlewares/checkFile.js';
import { checkId } from '../middlewares/checkId.js';

const router = express.Router();

router.route('/api/users')
.get(allUser)
.post(checkFile,createUser).all(notAllowed)

router.route('/api/users/:id')
.get(checkId,singleUser)
.patch(checkId,updateUser)
.delete(checkId,deleteUser).all(notAllowed)

export default router;