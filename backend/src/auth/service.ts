import db from '../database';
import { LoginInput, UserModel, UserRecord } from "./type";

export async function findOneByEmailAndPw(user: LoginInput): Promise<UserModel> {
  const query = `SELECT * FROM users WHERE email = ? AND password = ?`;
  const result: UserRecord = (await db.query(query, user.email, user.password))[0][0];
  return result && toModel(result);
}

async function toModel(record: UserRecord): Promise<UserModel> {
  return  {
    id: record.id,
    name: record.name,
    password: record.password,
    email: record.email,
  }
}