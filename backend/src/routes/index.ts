import { Router } from 'express';
import { rootRouter } from './rootRoute';
import { travelTipsRouter } from './travelTipsRoutes';
import { toursRouter } from './toursRoute';
import { activityLevelsRouter } from './activityLevelsRoute';

export const routes = Router();

routes.use(rootRouter);
routes.use(travelTipsRouter);
routes.use(toursRouter);
routes.use(activityLevelsRouter);