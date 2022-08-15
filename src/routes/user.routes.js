import { Router } from "express";
const router = Router();

import {createUser} from '../controllers/user.controller';
import { verifyToken } from '../middleswares';

router.post("/", [verifyToken], createUser);

export default router;