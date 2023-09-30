import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';

type Props = Record<string, never>;

const ProjectItemSkeleton = (_props: Props) => {
  return <Skeleton height={250} highlightColor='#bbbabdb8' />;
};

export default ProjectItemSkeleton;
