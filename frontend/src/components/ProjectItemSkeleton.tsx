import React from "react";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

type Props = {};

const ProjectItemSkeleton = (props: Props) => {
  return <Skeleton count={5} />;
};

export default ProjectItemSkeleton;
