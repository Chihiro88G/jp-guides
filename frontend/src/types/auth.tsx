
export type User = {
  id: string;
  username: string;
  email: string;
}

export type AuthState = {
  user: User | null;
  isAuthenticated: boolean;
  // loading: boolean;
  // error: string | null;
}