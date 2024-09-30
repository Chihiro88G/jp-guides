export type UserRecord = {
  id: number,
  name: string,
  password: string,
  email: string,
  createdAt: Date,
  editedAt: Date,
};

export type UserModel = {
  id: number,
  name: string,
  password: string,
  email: string,
};

export type LoginInput = {
  email: string,
  password: string,
};

export type SignupInput = {
  name: string,
  password: string,
  email: string,
};

export type UpdatePasswordInput = {
  id: number,
  newPassword: string,
};