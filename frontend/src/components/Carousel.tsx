import React, { lazy, Suspense } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick-theme.css';
import 'slick-carousel/slick/slick.css';
import type { Project } from '../../types.ts';
import Fallback from './Fallback.tsx';

const ProjectItem = lazy(() => import('./ProjectItem'));

type Props = {
	projects: Project[];
};

const Carousel = (props: Props) => {
	const { projects } = props;

	const settings = {
		infinite: true,
		slidesToShow: 4,
		slidesToScroll: 1,
		autoplay: true,
		speed: 3000,
		autoplaySpeed: 10,
		cssEase: 'linear',
		responsive: [
			{
				breakpoint: 976,
				settings: {
					slidesToShow: 3,
					slidesToScroll: 1,
					infinite: true,
				},
			},
			{
				breakpoint: 768,
				settings: {
					slidesToShow: 2,
					slidesToScroll: 1,
					infinite: true,
				},
			},
			{
				breakpoint: 480,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1,
					infinite: true,
				},
			},
		],
	};

	return (
		<div className='w-full p-5 overflow-hidden'>
			<Slider {...settings}>
				{projects?.map((project) => (
					<Suspense key={project.id} fallback={<Fallback />}>
						<ProjectItem project={project} />
					</Suspense>
				))}
			</Slider>
		</div>
	);
};

export default Carousel;
