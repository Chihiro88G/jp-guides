import { Router } from 'express';
import { rootRouter } from './rootRoute';
import { travelTipsRouter } from './travelTipsRoutes';
import { toursRouter } from './toursRoute';
import { activityLevelsRouter } from './activityLevelsRoute';
import { destinationsRouter } from './destinationsRoute';
import { weatherRouter } from './weatherRoute';
import { iteneraryRouter } from './iteneraryRoute';
import { authRouter } from './auth';

export const routes = Router();

routes.use(rootRouter);
routes.use(authRouter);
routes.use(travelTipsRouter);
routes.use(toursRouter);
routes.use(activityLevelsRouter);
routes.use(destinationsRouter);
routes.use(weatherRouter);
routes.use(iteneraryRouter);