import { Router } from 'express';
import controller from '../tours/controller';

export const toursRouter = Router();
toursRouter.get('/tours', controller.get);
toursRouter.get('/tours/:tourId', controller.getOne);