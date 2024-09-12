import { createAsyncThunk } from '@reduxjs/toolkit';

type LoginProps = {
  email: string,
  password: string,
}

// createAsyncThunk automatically generates pending, fulfilled, and rejected action types
// arg1: action type string (base)
// arg2: async function to create a thunk function what will 
  // 1. dispach the pending action
  // 2. execute provided async function
  // 3. dispatch either fulfilled or rejected action based on the result
export const login = createAsyncThunk(
  'auth/login',
  async ({ email, password }: LoginProps, { rejectWithValue }) => {
    try {
      const response = await fetch(`${process.env.REACT_APP_API_URI}/login`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password }),
      });

      const data = await response.json();
      if (response.ok) {
        return data.user;
      } else {
        return rejectWithValue(data.message);
      }
    } catch (error) {
      return rejectWithValue('An error occurred during login');
    }
  }
);

export const register = createAsyncThunk(
  'auth/register',
  async ({ name, email, password }: { name: string; email: string; password: string }, { rejectWithValue }) => {
    try {
      const response = await fetch(`${process.env.REACT_APP_API_URI}/register`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, email, password }),
      });
      const data = await response.json();
      if (response.ok) {
        return data.user;
      } else {
        return rejectWithValue(data.message);
      }
    } catch (error) {
      return rejectWithValue('An error occurred during registration');
    }
  }
);

export const logout = createAsyncThunk(
  'auth/logout',
  async (_, { rejectWithValue }) => {
    try {
      await fetch('/api/logout', { method: 'POST' });
      return null;
    } catch (error) {
      return rejectWithValue('An error occurred during logout');
    }
  }
);