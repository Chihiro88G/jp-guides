import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  Box,
  Typography,
  TextField,
  Button,
  Grid,
} from "@mui/material";
import AuthFormContainer from "../../components/auth/AuthFormContainer";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const navigate = useNavigate();

  const handleLogin = async() => {
    const userData = {
      email: email,
      password: password,
    };
  
    fetch(`${process.env.REACT_APP_API_URI}/login`, {
      credentials: 'include',
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(userData),
    })
      .then((res) => {
        if (!res.ok) {
          throw new Error("Login failed. Please check your credentials.");
        }
        return res.json();
      })
      .then((data) => {
        console.log("Login successful:", data);
        navigate('/');
      })
      .catch((error) => {
        console.error("Login failed:", error);
        setError(error.message);
      });
  };

  return (
    <AuthFormContainer>
      <Box sx={{ mt: 1 }}>
      {error && <Typography color="error">{error}</Typography>}
        <TextField
          margin="normal"
          required
          fullWidth
          id="email"
          label="Email Address"
          name="email"
          autoFocus
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <TextField
          margin="normal"
          required
          fullWidth
          id="password"
          name="password"
          label="Password"
          type="password"
          value={password}
          onChange={(e) => {
            setPassword(e.target.value);
          }}
        />

        <Button
          fullWidth
          variant="contained"
          sx={{ mt: 3, mb: 2 }}
          onClick={handleLogin}
        >
          Login
        </Button>
        <Grid container justifyContent={"flex-end"}>
          <Grid item>
            <Link to="/register">Don't have an account? Register</Link>
          </Grid>
        </Grid>
      </Box>
    </AuthFormContainer>
  );
};