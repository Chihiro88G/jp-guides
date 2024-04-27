import { Router } from 'express';
import { rootRouter } from './rootRoute';
import { travelTipsRouter } from './travelTipsRoutes';

export const routes = Router();

routes.use(rootRouter);
routes.use(travelTipsRouter);