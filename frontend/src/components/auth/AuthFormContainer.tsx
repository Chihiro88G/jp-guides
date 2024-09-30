import { ReactNode } from "react";
import { useLocation } from "react-router-dom";
import { LockOutlined } from "@mui/icons-material";
import {
  Container,
  CssBaseline,
  Box,
  Avatar,
  Typography
} from "@mui/material";

export default function AuthFormContainer({ children }: { children: ReactNode}) {
  const location = useLocation();
  const pathname = location.pathname.split('/')[1].replace('-', ' ');

  return (
      <Container maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            mt: 20,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: "primary.light" }}>
            <LockOutlined />
          </Avatar>
          <Typography variant="h5">{pathname[0].toUpperCase() + pathname.slice(1)}</Typography>
          {children}
        </Box>
      </Container>
  );
};