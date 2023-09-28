export interface Project {
  id: number | string;
  name: string;
  url: string;
  img: string;
}

export interface Skill {
  id: number | string;
  icon: string;
  name: string;
}

export interface Experience {
  id: number | string;
  startDate: string;
  endDate: string;
  corp: string;
  position: string;
  desc: string;
}
