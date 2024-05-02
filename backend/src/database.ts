import mysql from 'mysql2';
import { Pool } from 'mysql2/promise';

import dotenv from 'dotenv';
dotenv.config();

let pool: Pool;

type Result = [
  any,
  any
];

async function getPool(): Promise<Pool> {
  if (!pool) pool = mysql.createPool(await getDbInfo()).promise();
  return pool
}

export default {
  async query(query: string, ...args: any[]): Promise<Result> {
    return (await getPool()).query(query, [...(args || [])]);
  }
}

async function getDbInfo(): Promise<any> {
  return {
    host: process.env.MYSQL_HOST,
    user: process.env.MYSQL_USER,
    password: process.env.MYSQL_PASSWORD,
    database: process.env.MYSQL_DATABASE
  };
}