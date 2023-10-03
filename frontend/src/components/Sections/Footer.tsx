/// <reference types="vite-plugin-svgr/client" />

import Github from '/public/icons/github.svg?react';
import Gitlab from '/public/icons/gitlab.svg?react';
import Linkedin from '/public/icons/linkedin.svg?react';
import Email from '/public/icons/mail.svg?react';

const Footer = () => {
  const handleClickLink = (link: string) => {
    window.open(link, '_blank');
  };

  return (
    <div className='flex-between p-5 border-t-[1px] border-[white]' data-testid='footer'>
      <div>
        <p>Developed By Esrafil Elahi</p>
      </div>
      <div className='xs-only:hidden'>
        <p>Copyright © esrafil.elahi@gmail.com 2023 All Rights Reserved</p>
      </div>
      <div className='flex gap-3'>
        <Email role='img' className='w-8 h-8 cursor-pointer' onClick={() => handleClickLink('mailto:esrafil.elahi@gmail.com')} />
        <Github
          role='img'
          className='w-9 h-9 cursor-pointer'
          onClick={() => handleClickLink('https://github.com/esrafilelahi')}
        />
        <Gitlab role='img' className='w-8 h-8 cursor-pointer' onClick={() => handleClickLink('https://gitlab.com/esrafil')} />
        <Linkedin
          role='img'
          className='w-8 h-8 cursor-pointer'
          onClick={() => handleClickLink('https://www.linkedin.com/in/esrafil-elahi')}
        />
      </div>
    </div>
  );
};

export default Footer;
