import { Router } from 'express';

export const rootRouter = Router();
rootRouter.get('/', (req, res) => {
  res.json({ root: 'success' })
})