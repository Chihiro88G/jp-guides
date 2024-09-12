import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  Box,
  Button,
  Grid,
  TextField,
  Typography,
} from "@mui/material";
import AuthFormContainer from "../../components/auth/AuthFormContainer";
import { register } from "../../slices/authThunk";
import { useAppDispatch } from "../../hooks/hooks";

export default function Register() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");

  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const handleRegister = async() => {
    if (!(name && email && password && confirmPassword)) {
      setError('Please fill out all items');
      return;
    }

    if (password !== confirmPassword) {
      setError('Passwords not matched');
      return;
    }

    const newUser = {
      name: name,
      email: email,
      password: password,
    }

    const result = await dispatch(register(newUser));

    try {
      if (register.fulfilled.match(result)) navigate('/');
      if (register.rejected.match(result)) setError('Register Rejected');
    } catch (error) {
      console.error('Register failed: ', error);
      setError('Register failed');
    }
  };

  return (
    <AuthFormContainer>
      <Box sx={{ mt: 3 }}>
        {error && <Typography color="error">{error}</Typography>}
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <TextField
              name="name"
              required
              fullWidth
              id="name"
              label="Name"
              autoFocus
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </Grid>

          <Grid item xs={12}>
            <TextField
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              required
              fullWidth
              name="confirmPassword"
              label="Confirm Password"
              type="password"
              id="confirmPassword"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
            />
          </Grid>
        </Grid>
        <Button
          fullWidth
          variant="contained"
          sx={{ mt: 3, mb: 2 }}
          onClick={handleRegister}
        >
          Register
        </Button>
        <Grid container justifyContent="flex-end">
          <Grid item>
            <Link to="/login">Already have an account? Login</Link>
          </Grid>
        </Grid>
      </Box>
    </AuthFormContainer>
  );
};