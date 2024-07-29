import { Box } from "@mui/material";
import IteneraryItem from "./IteneraryItem";

export default function Itenerary({ itenerary }: {itenerary: any}) {
  console.log(itenerary);

  if (itenerary.length < 1) return <Box>No Itenerary found</Box>;

  return (
    itenerary.map((item: any, index: number) => (
      <IteneraryItem
        iteneraryItem={item}
        key={item.title}
        dayIndex={index + 1}
      />
    ))
  )
}