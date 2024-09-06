import { Box, Typography } from '@mui/material';

type TourDetailItemProps = {
  title: string,
  content: string | number | JSX.Element,
};

export default function TourDetailItem({ title, content }: TourDetailItemProps) {
  return (
    <Box
      sx={{ 
        m: '10px 0',
        width: { xs: '100%', md: '15%'}
      }}>
      <Typography>{title}</Typography>
      <Typography>{content}</Typography>
    </Box>
  )
}