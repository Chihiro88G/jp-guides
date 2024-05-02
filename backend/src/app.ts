import express, { Express, Request, Response } from 'express';
import cors from 'cors';
import { routes } from './routes';

const app: Express = express();
const port = 8000;

app.use(cors());
app.use(express.json());
app.use(routes);

app.use((err, res) => {
  console.error(err);
  res.status(500).send('Error somewhere in server')
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});