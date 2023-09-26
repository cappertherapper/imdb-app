import { Badge } from "@chakra-ui/react";

interface Props {
  rating: number;
}
const Rating = ({ rating }: Props) => {
  const roundedRating = Math.round(rating * 10) / 10;

  let color =
    roundedRating >= 7.0 ? "green" : roundedRating > 6.0 ? "yellow" : "red";
  return (
    <Badge colorScheme={color} borderRadius={"4px"}>
      {roundedRating}
    </Badge>
  );
};

export default Rating;
