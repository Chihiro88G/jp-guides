import { Box, Typography } from "@mui/material";

type IteneraryItemProps = {
  iteneraryItem: any,
  dayIndex: number,
}

export default function IteneraryItem({ iteneraryItem, dayIndex }: IteneraryItemProps) {

  return (
    <Typography component='div' sx={{ marginBottom: '30px' }}>
      <Box sx={{
        fontWeight: 'bold'
      }}>
        Day {dayIndex}: {iteneraryItem.title}
      </Box>
      <Box sx={{
        fontWeight: 'light'
      }}>
        Included meals: {iteneraryItem.includedMeals}
      </Box>
      <Box sx={{
        marginTop: '10px',
      }}>
        <pre>{iteneraryItem.content}</pre>
      </Box>
    </Typography>
  )
}