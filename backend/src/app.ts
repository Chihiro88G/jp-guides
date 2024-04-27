import express, { Express, Request, Response } from 'express';
import cors from 'cors';
import { routes } from './routes';

const app: Express = express();
const port = 8000;

app.use(cors());
app.use(express.json());
app.use(routes);

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
})