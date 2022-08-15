import { Router } from "express";
const router = Router();

import {signIn, signUp} from '../controllers/auth.controllers';
import {checkExistingUser} from '../middleswares'

router.post('/signin', signIn)
router.post('/signup', checkExistingUser, signUp)


 export default router;