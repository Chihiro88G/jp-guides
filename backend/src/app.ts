import express, { Express, Request, Response } from 'express';

const app: Express = express();
const port = 8000;

app.get("/", (req: Request, res: Response) => {
  res.send("Express & TypeScript Server Success!");
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
})