import React from "react";
import type { Project, Skill } from "../../../types.ts";
import SkillItem from "../SkillItem.tsx";

type Props = {
  skills: Skill[];
};

const Skills = (props: Props) => {
  const { skills } = props;

  return (
    <div className="flex-center flex-wrap gap-10">
      {skills.map((skill) => (
        <SkillItem key={skill.id} skill={skill} />
      ))}
    </div>
  );
};

export default Skills;
