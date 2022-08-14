import { Router } from "express";
const router = Router();

import {signIn, signUp} from '../controllers/auth.controllers';

router.post('/signin', signIn)
router.post('/signup', signUp)


 export default router;