import { Router } from 'express';
import controller from '../weather/controller';

export const weatherRouter = Router();
weatherRouter.get('/weather', controller.get);
