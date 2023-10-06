import axios from 'axios';
import { useEffect, useRef, useState } from 'react';
import type { Experience, Project, Skill } from '../types.ts';
import Carousel from './components/Carousel';
import GoToTop from './components/GoToTop.tsx';
import AboutMe from './components/Sections/AboutMe';
import Experiences from './components/Sections/Experiences.tsx';
import Footer from './components/Sections/Footer.tsx';
import HeroSvg from './components/Sections/HeroSvg';
import Skills from './components/Sections/Skills.tsx';
import Title from './components/Title';

const App = () => {
  const ref = useRef<HTMLDivElement | null>(null);

  // const [data, setData] = useState({
  //   skills: [],
  //   projects: [],
  //   experiences: [],
  // });

  // console.log(data);

  // const fetchData = async () => {
  //   const pro = await axios.get(`${import.meta.env.VITE_BACKEND_BASE_URL}/api/projects`);
  //   const exp = await axios.get(`${import.meta.env.VITE_BACKEND_BASE_URL}/api/experiences`);
  //   const skill = await axios.get(`${import.meta.env.VITE_BACKEND_BASE_URL}/api/skills`);

  //   setData({
  //     skills: skill.data.skills,
  //     projects: pro.data.projects,
  //     experiences: exp.data.experiences,
  //   });
  // };

  // useEffect(() => {
  //   fetchData();
  // }, []);

  const handleScroll = () => {
    ref.current?.scroll();
  };

  const projects: Project[] = [
    {
      id: 1,
      name: 'clinic ghodad',
      url: 'https://app.clinicghodad.com',
      img: '/images/pq.jpg',
    },
    {
      id: 2,
      name: 'Avaaztech',
      url: 'https://avaaztech.com',
      img: '/images/avaaztech.png',
    },
    {
      id: 3,
      name: 'Azki landing page',
      url: 'https://khodro45.com/landing/azki',
      img: '/images/azki.png',
    },
    {
      id: 4,
      name: 'khodro45 gamification',
      url: 'https://khodro45.com/landing/personality/',
      img: '/images/khodro45.png',
    },
    {
      id: 5,
      name: 'Chatal restaurant',
      url: 'https://chatal-restaurant.vercel.app',
      img: '/images/restaurant.png',
    },
    {
      id: 6,
      name: 'Next football news',
      url: 'https://next-football-api.netlify.app/',
      img: '/images/next football.png',
    },
    {
      id: 7,
      name: 'Food recipe',
      url: 'https://food-recipe-phi.vercel.app',
      img: '/images/food recipe.png',
    },
    {
      id: 8,
      name: 'Redux fakeshop',
      url: 'https://redux-fake-shop.vercel.app',
      img: '/images/redux fakeshop.png',
    },
  ];

  const skills: Skill[] = [
    {
      id: 1,
      img: '/images/skills/js.png',
      name: 'Javascript',
    },
    {
      id: 2,
      img: '/images/skills/ts.png',
      name: 'Typescript',
    },
    {
      id: 3,
      img: '/images/skills/node.png',
      name: 'Node.js',
    },
    {
      id: 4,
      img: '/images/skills/es6.png',
      name: 'ES6',
    },
    {
      id: 5,
      img: '/images/skills/react.webp',
      name: 'React.js',
    },
    {
      id: 6,
      img: '/images/skills/next.png',
      name: 'Next.js',
    },
    {
      id: 7,
      img: '/images/skills/redux.png',
      name: 'Redux',
    },
    {
      id: 8,
      img: '/images/skills/zustand.png',
      name: 'Zustand',
    },
    {
      id: 9,
      img: '/images/skills/docker.png',
      name: 'Docker',
    },
    {
      id: 10,
      img: '/images/skills/jest.png',
      name: 'Jest',
    },
    {
      id: 11,
      img: '/images/skills/RTL.png',
      name: 'React Testing Library',
    },
    {
      id: 12,
      img: '/images/skills/cypress.jpeg',
      name: 'Cypress',
    },
    {
      id: 13,
      img: '/images/skills/MUI.png',
      name: 'Material UI',
    },
    {
      id: 14,
      img: '/images/skills/tailwind.png',
      name: 'Tailwind',
    },
    {
      id: 15,
      img: '/images/skills/bootstrap.png',
      name: 'Bootstrap',
    },
    {
      id: 16,
      img: '/images/skills/sass.png',
      name: 'Sass',
    },
    {
      id: 17,
      img: '/images/skills/react query.png',
      name: 'React Query',
    },
    {
      id: 18,
      img: '/images/skills/react native.png',
      name: 'React Native',
    },
    {
      id: 19,
      img: '/images/skills/git.png',
      name: 'Git',
    },
    {
      id: 20,
      img: '/images/skills/github.png',
      name: 'Github',
    },
    {
      id: 21,
      img: '/images/skills/gitlab.png',
      name: 'Gitlab',
    },
    {
      id: 22,
      img: '/images/skills/express.png',
      name: 'Express.js',
    },
    {
      id: 23,
      img: '/images/skills/mysql.png',
      name: 'MySQL',
    },
    {
      id: 24,
      img: '/images/skills/postgres.png',
      name: 'PostgreSQL',
    },
    {
      id: 25,
      img: '/images/skills/mongo.png',
      name: 'MongoDB',
    },
    {
      id: 26,
      img: '/images/skills/redis.png',
      name: 'Redis',
    },
    {
      id: 27,
      img: '/images/skills/prisma.png',
      name: 'Prisma',
    },
    {
      id: 28,
      img: '/images/skills/mapbox.png',
      name: 'Mapbox',
    },
    {
      id: 29,
      img: '/images/skills/pwa.webp',
      name: 'PWA',
    },
    {
      id: 30,
      img: '/images/skills/postman.svg',
      name: 'Postman',
    },
    {
      id: 31,
      img: '/images/skills/trello.png',
      name: 'Trello',
    },
    {
      id: 32,
      img: '/images/skills/webpack.webp',
      name: 'Webpack',
    },
  ];

  const avaaztechDescriptions =
    'At Avaaztech, our technical department operates autonomously, ensuring seamless and efficient functioning that supports the overall mission of Avaaztech By having a dedicated technical team, we can focus solely on optimizing our technological infrastructure, developing cutting-edge software applications, and implementing industry-leading practices. Our independent approach enables us to adapt swiftly to evolving technologies, leverage the latest tools, and remain at the forefront of technological advancements.';

  const avaazMarketingDescriptions =
    'marketing and technical base company, with several different work areas like: technical team, social media, sales, SEO content and graphic team';

  const shamsUniDescriptions =
    'A frontend developer of the college community, I had the opportunity to contribute to the educational journey of students by designing and implementing innovative projects that enhanced their learning experiences. and did most collegian projects';

  const aytronikDescriptions =
    'As a member of this innovative team, I have been involved in a wide range of team working that have allowed me to grow both personally and professionally  ';

  const experiences: Experience[] = [
    {
      id: 1,
      startDate: 'May 2022',
      endDate: 'Oct 2023',
      corp: 'Avaaztech Corp',
      position: 'Senior Frontend Engineer',
      desc: avaaztechDescriptions,
    },
    {
      id: 2,
      startDate: 'Aug 2021',
      endDate: 'May 2022',
      corp: 'Avaaz Marketing Corp',
      position: 'Senior Frontend Developer',
      desc: avaazMarketingDescriptions,
    },
    {
      id: 3,
      startDate: 'Jan 2020',
      endDate: 'Mar 2021',
      corp: 'Shams higher education institute',
      position: 'Frontend Developer Reactjs| Nextjs | Typescript',
      desc: shamsUniDescriptions,
    },
    {
      id: 4,
      startDate: 'Sep 2018',
      endDate: 'Dec 2019',
      corp: 'AYTRONIC Corp',
      position: 'Frontend Developer',
      desc: aytronikDescriptions,
    },
  ];

  return (
    <div>
      {/* Hero */}
      <div className='relative'>
        <HeroSvg />
        <img src='/images/me.png' className='w-[13%] h-[30%] md:h-[40%] absolute right-[20%] bottom-[2%]' />
        <Title handleScroll={handleScroll} />
      </div>

      {/* About Me */}
      <AboutMe ref={ref} />

      {/* Projects */}
      <div className='p-5 mt-10 lg:mt-24'>
        <h2 className='title relative lines'>PROJECTS</h2>
        <Carousel projects={projects} />
      </div>

      {/* Skills */}
      <div className='p-5 mt-10 lg:mt-24 mb-10'>
        <h2 className='title pb-7 relative lines'>SKILLS</h2>
        <Skills skills={skills} />
      </div>

      {/* Experiences */}
      <div className='p-5 mt-10 lg:mt-24 mb-10'>
        <h2 className='title pb-7 relative lines'>EXPERIENCES</h2>
        <Experiences experiences={experiences} />
      </div>

      {/* Footer */}
      <Footer />
      <GoToTop />
    </div>
  );
};

export default App;
