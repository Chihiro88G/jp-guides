import { useState } from "react";
import { Link } from "react-router-dom";
import {
  Box,
  Typography,
  TextField,
  Button,
  Grid,
} from "@mui/material";
import AuthFormContainer from "../../components/auth/AuthFormContainer";

export default function Reset() {
  const [email, setEmail] = useState('');
  const [error, setError] = useState('');
  const [successMsg, setSuccessMsg] = useState('')

  const handleReset = async () => {
    setError('');

    try {
      const response = await fetch(`${process.env.REACT_APP_API_URI}/reset`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email }),
      });

      if (response.ok) {
        return setSuccessMsg('Email to change password was sent to you!')
      } else {
        return setError('Email was not found in our system.')
      }
    } catch (error) {
      return console.log(error);
    }
  }

  return (
    <AuthFormContainer>
      <Box sx={{ mt: 1 }}>
      {successMsg.length > 1 && <Typography color="error">{successMsg}</Typography>}
      {error.length > 1  && <Typography color="error">{error}</Typography>}
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

        <Button
          fullWidth
          variant="contained"
          sx={{ mt: 3, mb: 2 }}
          onClick={handleReset}
          disabled={successMsg.length > 1}
        >
          Reset Password
        </Button>
        <Grid container justifyContent={"flex-end"}>
          <Grid item>
            <Link to="/login">Back to login</Link>
          </Grid>
        </Grid>
      </Box>
    </AuthFormContainer>
  );
};