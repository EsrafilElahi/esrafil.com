import { VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import type { Experience } from '../../types.ts';
import Laptop from '/public/icons/laptop.svg?react';

type Props = {
  experience: Experience;
};

const ExperienceItem = (props: Props) => {
  const { experience } = props;

  return (
    <VerticalTimelineElement
      className='vertical-timeline-element--work'
      contentStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
      contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
      date={`${experience.startDate} - ${experience.endDate}`}
      iconStyle={{ background: '#8AABFF', color: '#fff' }}
      icon={<Laptop />}
    >
      <div data-testid='exp'>
        <h3 className='vertical-timeline-element-title text-xl font-bold tracking-wide'>{experience.position}</h3>
        <h4 className='vertical-timeline-element-subtitle'>{experience.corp}</h4>
        <p>{experience.desc}</p>
      </div>
    </VerticalTimelineElement>
  );
};

export default ExperienceItem;
