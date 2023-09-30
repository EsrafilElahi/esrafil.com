import { VerticalTimeline } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import type { Experience } from '../../../types.ts';
import ExperienceItem from '../ExperienceItem.tsx';

type Props = {
  experiences: Experience[];
};

const Experiences = (props: Props) => {
  const { experiences } = props;

  return (
    <VerticalTimeline>
      {experiences.map((experience) => (
        <ExperienceItem key={experience.id} experience={experience} />
      ))}
    </VerticalTimeline>
  );
};

export default Experiences;
