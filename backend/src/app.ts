declare module 'express-session' {
  interface SessionData {
    isLoggedIn: boolean;
    // userId?: string;
  }
}

import { createRequire } from 'module';
import express, { Express, Request, Response } from 'express';
import session from 'express-session';
import cors from 'cors';
import { routes } from './routes';
const require = createRequire(import.meta.url);
const MySQLStore = require('express-mysql-session')(session);

const app: Express = express();
const port = 8000;

const corsOptions = {
  origin: 'http://localhost:3000',
  credentials: true,
  methods: ['GET', 'POST', 'PUT', 'PATCH', 'DELETE'],
  allowedHeaders: ['Content-Type', 'Authorization'],
};

app.use(cors(corsOptions));

app.use(express.json());

const store = new MySQLStore({
  port: 3306,
  host: process.env.MYSQL_HOST,
  user: process.env.MYSQL_USER,
  password: process.env.MYSQL_PASSWORD,
  database: process.env.MYSQL_DATABASE
});

app.use(session({
  secret: 'my secret key',
  store: store,
  resave: false,
  saveUninitialized: false,
  cookie: {
    secure: false, // set to true if using HTTPS
    httpOnly: true,
    sameSite: 'lax',
    maxAge: 24 * 60 * 60 * 1000 // 24 hours
  }
}))

app.use(routes);

app.use((err, res) => {
  console.error(err);
  res.status(500).send('Error somewhere in server')
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});