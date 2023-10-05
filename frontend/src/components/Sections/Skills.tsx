import { QueryFunction, useQuery } from '@tanstack/react-query';
import axios from 'axios';
import { Suspense, lazy } from 'react';
import type { Skill } from '../../../types.ts';
import Fallback from '../Fallback.tsx';

const SkillItem = lazy(() => import('../SkillItem.tsx'));

type Props = {
  skills: Skill[];
};

interface ApiResponse {
  skills: Skill[];
}

const Skills = (props: Props) => {
  const { skills } = props;

  const fetchSkills = async () => {
    try {
      const response = await axios.get<ApiResponse>(`${import.meta.env.VITE_BACKEND_BASE_URL}/api/skills`);
      return response.data;
    } catch (error: any) {
      console.log('error fetching skills', error);
      throw new Error(`Error fetching skills: ${error.message}`);
    }
  };

  const result = useQuery({ queryKey: ['skills'], queryFn: fetchSkills });

  console.log('result :', result);

  return (
    <div className='flex-center flex-wrap gap-10' data-testid='skills'>
      {skills.map((skill) => (
        <Suspense key={skill.id} fallback={<Fallback />}>
          <SkillItem skill={skill} />
        </Suspense>
      ))}
    </div>
  );
};

export default Skills;
