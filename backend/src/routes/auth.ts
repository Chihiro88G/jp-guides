import { Router } from 'express';
import controller from '../auth/controller';

export const authRouter = Router();
authRouter.post('/login', controller.postLogin);
authRouter.post('/register', controller.postRegister);
authRouter.post('/logout', controller.postLogout);
authRouter.post('/reset', controller.postReset);
authRouter.get('/check-token', controller.getCheckToken);
authRouter.post('/update-password', controller.postUpdate);