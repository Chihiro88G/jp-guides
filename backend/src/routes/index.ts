import { Router } from 'express';
import { rootRouter } from './rootRoute';
import { travelTipsRouter } from './travelTipsRoutes';
import { toursRouter } from './toursRoute';

export const routes = Router();

routes.use(rootRouter);
routes.use(travelTipsRouter);
routes.use(toursRouter);