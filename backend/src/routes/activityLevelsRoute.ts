import { Router } from 'express';
import controller from '../activity-levels/controller';

export const activityLevelsRouter = Router();
activityLevelsRouter.get('/activity-levels', controller.get);
