import express from "express";
import { createUser, deleteUser, getUser, getUsers, updateUser } from "../controllers/userController.js";
import { notAllowed } from "../utils/notAllowed.js";
export const router = express.Router();


router.route('/api/users')
 .get(getUsers)
 .post(createUser).all(notAllowed);

router.route('/api/users/:id')
 .get(getUser)
 .patch(updateUser)
 .delete(deleteUser).all(notAllowed);


 export default router;