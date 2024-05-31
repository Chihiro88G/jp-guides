import { Router } from 'express';
import { rootRouter } from './rootRoute';
import { travelTipsRouter } from './travelTipsRoutes';
import { toursRouter } from './toursRoute';
import { activityLevelsRouter } from './activityLevelsRoute';
import { destinationsRouter } from './destinationsRoute';

export const routes = Router();

routes.use(rootRouter);
routes.use(travelTipsRouter);
routes.use(toursRouter);
routes.use(activityLevelsRouter);
routes.use(destinationsRouter);