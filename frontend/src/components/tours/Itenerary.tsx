import { Box } from "@mui/material";
import IteneraryItem from "./IteneraryItem";
import { IteneraryType } from "../../types/itenerary";

export default function Itenerary({ itenerary }: {itenerary: IteneraryType[]}) {
  if (itenerary.length < 1) return <Box>No Itenerary found</Box>;

  return (
    <>
      {itenerary.map((item: IteneraryType, index: number) => (
        <IteneraryItem
          iteneraryItem={item}
          key={item.title}
          dayIndex={index + 1}
        />
      ))}
    </>
  )
}