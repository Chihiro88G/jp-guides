import { Box, Typography } from "@mui/material";
import { IteneraryType } from "../../types/itenerary";

type IteneraryItemProps = {
  iteneraryItem: IteneraryType,
  dayIndex: number,
}

export default function IteneraryItem({ iteneraryItem, dayIndex }: IteneraryItemProps) {

  return (
    <Typography component='div' sx={{ mb: '30px' }}>
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
        mt: '10px',
      }}>
        <pre>{iteneraryItem.content}</pre>
      </Box>
    </Typography>
  )
}