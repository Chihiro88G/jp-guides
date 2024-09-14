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
import { useAppDispatch } from "../../hooks/hooks";

export default function Reset() {
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");

  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const handleReset = () => {
    
  }

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

        <Button
          fullWidth
          variant="contained"
          sx={{ mt: 3, mb: 2 }}
          onClick={handleReset}
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