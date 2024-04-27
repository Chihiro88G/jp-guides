import { Router } from 'express';

export const rootRouter = Router();
rootRouter.get('/', (req, res) => {
  console.log('inside root')
  res.json({ root: 'success' })
})