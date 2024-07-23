import { Router } from 'express';
import controller from '../itenerary/controller';

export const iteneraryRouter = Router();
iteneraryRouter.get('/itenerary/:tourId', controller.getOne);