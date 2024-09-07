import db from '../database';
import { LoginInput, SignupInput, UserModel, UserRecord } from "./type";

export async function findOneByEmail(email: string): Promise<UserModel> {
  const query = `SELECT * FROM users WHERE email = ?`;
  const result: UserRecord = (await db.query(query, email))[0][0];
  return result && toModel(result);
}

export async function findOneByEmailAndPw(user: LoginInput): Promise<UserModel> {
  const query = `SELECT * FROM users WHERE email = ? AND password = ?`;
  const result: UserRecord = (await db.query(query, user.email, user.password))[0][0];
  return result && toModel(result);
}

export async function insert(user: SignupInput): Promise<UserModel> {
  const query = `
    INSERT INTO users
      (name, password, email)
    VALUES (?);
  `;

  const result = await db.query(query, [
    user.name,
    user.password,
    user.email,
  ]);

  return Object.assign(user, { id: result[0].insertId });
}

async function toModel(record: UserRecord): Promise<UserModel> {
  return  {
    id: record.id,
    name: record.name,
    password: record.password,
    email: record.email,
  }
}

