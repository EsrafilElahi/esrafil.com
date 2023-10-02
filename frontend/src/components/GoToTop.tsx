import { useEffect, useState } from 'react';
import Arrow from '/public/icons/arrow.svg?react';

const GoToTop = () => {
  const [scrollY, setScrollY] = useState<number>(0);

  const goToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY || window.pageYOffset;
      setScrollY(scrollY);
    };

    // Add event listener for scroll events
    window.addEventListener('scroll', handleScroll);

    // Cleanup the event listener on component unmount
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <Arrow
      role='img'
      className={`${scrollY < 415 && 'hidden'} w-9 h-9 cursor-pointer fixed bottom-[8%] md:bottom-[11%] right-10`}
      onClick={goToTop}
    />
  );
};

export default GoToTop;
