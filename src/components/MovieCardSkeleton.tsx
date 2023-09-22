import { Card, CardBody, Skeleton, SkeletonText } from "@chakra-ui/react";
import React from "react";

const MovieCardSkeleton = () => {
  return (
    <Card>
      <Skeleton height={"150px"}>
        <CardBody>
          <SkeletonText />
        </CardBody>
      </Skeleton>
    </Card>
  );
};

export default MovieCardSkeleton;
