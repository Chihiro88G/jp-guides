import db from '../database';
import { LoginInput, SignupInput, UpdatePasswordInput, UserModel, UserRecord } from "./type";

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

export async function findOneByToken(token: string): Promise<UserModel> {
  const query = `
    SELECT *
    FROM users
    WHERE reset_token = ?
    AND reset_token_expiry_date > ?
  `;
  const result: UserRecord = (await db.query(query, token, new Date()))[0][0];
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

export async function updatePasswordResetToken(token: string, userId: number): Promise<void> {
  const query = `
    UPDATE users
    SET reset_token = ?, reset_token_expiry_date = ?, edited = ?
    WHERE id = ?;
  `;

  await db.query(query, 
    token,
    new Date(new Date().setHours(new Date().getHours() + 1)),   // 1 hour from now
    new Date(),
    userId
  );
}

export async function updatePassword(user: UpdatePasswordInput): Promise<void> {
  const query = `
    UPDATE users
    SET password = ?, edited = ?, reset_token = null, reset_token_expiry_date = null
    WHERE id = ?;
  `;

  await db.query(query, 
    user.newPassword,
    new Date(),
    user.id
  );
}

async function toModel(record: UserRecord): Promise<UserModel> {
  return  {
    id: record.id,
    name: record.name,
    password: record.password,
    email: record.email,
  }
}

