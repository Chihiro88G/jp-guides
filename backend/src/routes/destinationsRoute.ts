import { Router } from 'express';
import controller from '../destinations/controller';

export const destinationsRouter = Router();
destinationsRouter.get('/destinations', controller.get);
