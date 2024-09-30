import { useState } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import {
  Box,
  Button,
  Grid,
  TextField,
  Typography,
} from "@mui/material";
import AuthFormContainer from "../../components/auth/AuthFormContainer";
import { login } from "../../slices/authThunk";
import { useAppDispatch } from "../../hooks/hooks";

export default function SetNewPassword() {
  const location = useLocation();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");

  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const token = location.search.replace('?', '');
  console.log(token);

  const handleChangePassword = async() => {
    if (!(password && confirmPassword)) {
      setError('Please fill out all items');
      return;
    }

    if (password !== confirmPassword) {
      setError('Passwords not matched');
      return;
    }

    const newUser = {
      email: email,
      password: password,
    }

    const result = await dispatch(login(newUser));

    try {
      if (login.fulfilled.match(result)) navigate('/');
      if (login.rejected.match(result)) setError('Login Rejected');
    } catch (error) {
      console.error('Change password failed: ', error);
      setError('Change password failed');
    }
  };

  return (
    <AuthFormContainer>
      <Box sx={{ mt: 3 }}>
        {error && <Typography color="error">{error}</Typography>}
        <Grid container spacing={2}>
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
          onClick={handleChangePassword}
        >
          Change Password
        </Button>
        {/* <Grid container justifyContent="flex-end">
          <Grid item>
            <Link to="/login">Already have an account? Login</Link>
          </Grid>
        </Grid> */}
      </Box>
    </AuthFormContainer>
  );
};