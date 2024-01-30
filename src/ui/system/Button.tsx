'use client';
import { useContext } from 'react';
import { ColorThemeContext } from '@/contexts/ColorTheme';
import { classesPalleteBackgorunds, color } from '@/constants/colorConstants';

// agregar class dependiendo del color

const Button = () => {
  const { colorPalette } = useContext(ColorThemeContext);

  return (
    <button
      className={` ${
        classesPalleteBackgorunds[colorPalette as color]
      }  px-4 py-2`}
    >
      Button
    </button>
  );
};

export default Button;
