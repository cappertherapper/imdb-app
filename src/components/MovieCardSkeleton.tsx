import { Card, CardBody, Skeleton, SkeletonText } from "@chakra-ui/react";

const MovieCardSkeleton = () => {
  return (
    <Card>
      <Skeleton height="278px">
        <CardBody flex="1">
          <SkeletonText mt="4" noOfLines={1} spacing="4" />{" "}
          {/* Heading skeleton */}
          <SkeletonText mt="1" noOfLines={1} spacing="1" />{" "}
          {/* Rating skeleton */}
        </CardBody>
      </Skeleton>
    </Card>
  );
};

export default MovieCardSkeleton;
