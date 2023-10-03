import { lazy, Suspense } from 'react';
import type { Skill } from '../../../types.ts';
import Fallback from '../Fallback.tsx';

const SkillItem = lazy(() => import('../SkillItem.tsx'));

type Props = {
  skills: Skill[];
};

const Skills = (props: Props) => {
  const { skills } = props;

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
