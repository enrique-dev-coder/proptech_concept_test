'use client';
import { useContext } from 'react';
import { ColorThemeContext } from '@/contexts/ColorTheme';
import { gradientTextClasses, color } from '@/constants/colorConstants';

const GradientText = ({
  text,
  customClasses,
}: {
  text: string;
  customClasses?: string;
}) => {
  const { colorPalette } = useContext(ColorThemeContext);

  return (
    <span
      className={`
        ${customClasses}
        bg-gradient-to-r 
        ${gradientTextClasses[colorPalette as color]}
        inline-block text-transparent bg-clip-text transition-all ease-linear`}
    >
      {text}
    </span>
  );
};

export default GradientText;
