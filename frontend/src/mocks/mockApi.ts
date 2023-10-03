import { rest, setupWorker } from 'msw';
import { setupServer } from 'msw/node';

export const handlers = [
  rest.get('/api/projects', (req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json([
        {
          id: 1,
          name: 'clinic ghodad',
          url: 'https://app.clinicghodad.com',
          img: '/images/p1.jpg',
        },
        {
          id: 2,
          name: 'project 1',
          url: 'https://app.clinicghodad.com',
          img: '/images/p2.jpg',
        },
      ])
    );
  }),

  rest.get('/api/skills', (req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json([
        {
          id: 1,
          icon: '/assets/react.svg',
          name: 'React',
        },
        {
          id: 2,
          icon: '/assets/react.svg',
          name: 'React',
        },
        {
          id: 3,
          icon: '/assets/react.svg',
          name: 'React',
        },
      ])
    );
  }),

  rest.get('/api/experiences', (req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json([
        {
          id: 1,
          startDate: 'July 2019',
          endDate: 'Agu 2020',
          corp: 'Aytronik corp',
          position: 'frontend developer',
          desc: 'lorem ipsum dolor sit amet, consectetur adip proident et non proident consequat, sed do eiusmod tempor incididunt ut labore et dolore mag',
        },
        {
          id: 2,
          startDate: 'Agu 2020',
          endDate: 'Feb 2021',
          corp: 'Shams uni',
          position: 'frontend reactjs | nextjs | typescript developer',
          desc: 'lorem ipsum dolor sit amet, consectetur adip proident et non proident consequat, sed do eiusmod tempor incididunt ut labore et dolore mag',
        },
      ])
    );
  }),
];

export const worker = setupWorker(...handlers);
export const server = setupServer(...handlers);
