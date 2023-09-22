import { Badge } from "@chakra-ui/react";
import React from "react";

interface Props {
  rating: number;
}
const Rating = ({ rating }: Props) => {
  let color = rating > 7.5 ? "green" : rating > 7.0 ? "yellow" : "red";
  return (
    <Badge colorScheme={color} borderRadius={"4px"}>
      {rating}
    </Badge>
  );
};

export default Rating;
