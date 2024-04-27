import { Router } from 'express';
import controller from '../travel-tips/controller';

export const travelTipsRouter = Router();
travelTipsRouter.get('/travel-tips', controller.get);