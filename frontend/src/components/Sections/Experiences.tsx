import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import { VerticalTimeline } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import type { Experience } from '../../../types.ts';
import ExperienceItem from '../ExperienceItem.tsx';

type Props = {
  experiences: Experience[];
};

interface ApiResponse {
  experiences: Experience[];
}

const Experiences = (props: Props) => {
  const { experiences } = props;

  const fetchExperiences = async () => {
    try {
      const response = await axios.get<ApiResponse>(`${import.meta.env.VITE_BACKEND_BASE_URL}/api/experiences`);
      return response.data;
    } catch (error: any) {
      console.log('error fetching experiences', error);
      throw new Error(`Error fetching experiences: ${error.message}`);
    }
  };

  const result = useQuery({ queryKey: ['experiences'], queryFn: fetchExperiences });

  console.log('result :', result);

  return (
    <VerticalTimeline>
      {experiences.map((experience) => (
        <ExperienceItem key={experience.id} experience={experience} />
      ))}
    </VerticalTimeline>
  );
};

export default Experiences;
