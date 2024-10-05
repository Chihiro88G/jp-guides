import { Box, Typography } from "@mui/material";

export default function NotFound404() {
  <Box sx={{  
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'column',
    mt: '30px'
  }}>
    <Typography variant='h3'>Oops!</Typography>
    <Typography variant='h6'>
      Couldn't find the requested page: 404
    </Typography>
  </Box>
};
