import { Router } from 'express';
import controller from '../auth/controller';

export const authRouter = Router();
authRouter.post('/login', controller.postLogin);
authRouter.post('/register', controller.postRegister);