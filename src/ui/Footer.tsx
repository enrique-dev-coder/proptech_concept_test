'use client';
import { useContext } from 'react';

import { ColorThemeContext } from '@/contexts/ColorTheme';
import { classesPalleteBackgroundAlt, color } from '@/constants/colorConstants';

const Footer = () => {
  const { colorPalette } = useContext(ColorThemeContext);

  return (
    <footer
      className={`
    ${classesPalleteBackgroundAlt[colorPalette as color]}
    w-full h-[350px] `}
    >
      <div className=" max-w-screen-super-large mx-auto">
        <p className=" text-white text-2xl">
          Aqui iria el footer con los links de privacy policy, redes sociales y
          eso
        </p>
      </div>
    </footer>
  );
};

export default Footer;
