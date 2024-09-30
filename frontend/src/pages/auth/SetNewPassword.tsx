import { useEffect, useState } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import {
  Box,
  Button,
  Grid,
  TextField,
  Typography,
} from "@mui/material";
import AuthFormContainer from "../../components/auth/AuthFormContainer";

export default function SetNewPassword() {
  const navigate = useNavigate();
  const location = useLocation();
  const [userData, setUserData] = useState<any>(null);
  const [newPassword, setNewPassword] = useState<string>("");
  const [confirmPassword, setConfirmPassword] = useState<string>("");
  const [error, setError] = useState<string>("");

  const token = location.search.replace('?', '');

  useEffect(() => {
    fetch(`${process.env.REACT_APP_API_URI}/check-token?token=${token}`)
    .then(res => res.json())
    .then(data => setUserData(data))
    .catch(error => console.log(error));
  }, []);

  const handleChangePassword = async() => {
    if (!userData) return;

    if (!(newPassword && confirmPassword)) {
      setError('Please fill out all items');
      return;
    }

    if (newPassword !== confirmPassword) {
      setError('Passwords not matched');
      return;
    }

    const user = {
      id: userData.id,
      password: newPassword,
      token: token,
    };

    try {
      const response = await fetch(`${process.env.REACT_APP_API_URI}/update-password`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ user }),
      });

      if (response.ok) {
        navigate('/login')
      } else {
        setError('Were not able to change password');
      }
    } catch (error) {
      return console.log(error);
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
              name="newPassword"
              label="New Password"
              type="password"
              id="newPassword"
              value={newPassword}
              onChange={(e) => setNewPassword(e.target.value)}
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
      </Box>
    </AuthFormContainer>
  );
};