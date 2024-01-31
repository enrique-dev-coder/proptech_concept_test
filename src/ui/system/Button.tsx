'use client';
import { useContext } from 'react';
import { ColorThemeContext } from '@/contexts/ColorTheme';
import {
  classesPalleteBackgorunds,
  classesPalleteBackgorundSofts,
  classesGhostButton,
  classesHoverNormalButton,
  color,
} from '@/constants/colorConstants';

type ButtonType = 'normal' | 'ghost' | 'soft';

const Button = ({
  text,
  customClasses,
  buttonType = 'normal',
}: {
  text: string;
  customClasses?: string;
  buttonType?: ButtonType;
}) => {
  const { colorPalette } = useContext(ColorThemeContext);

  switch (buttonType) {
    case 'ghost':
      return (
        <button
          className={` 
          ${customClasses}
          ${classesGhostButton[colorPalette as color]}  
          
          px-4 py-1   shadow-md bg-white text-lg border  text-write-main font-bold transition-all ease-in-out  `}
        >
          {text}
        </button>
      );
    case 'soft':
      return (
        <button
          className={` 
            ${customClasses}
            ${classesPalleteBackgorundSofts[colorPalette as color]}  
            px-4 py-1   shadow-md text-lg  rounded-md   font-bold transition-all ease-in-out `}
        >
          {text}
        </button>
      );

    default:
      return (
        <button
          className={` 
          ${customClasses}
          ${classesPalleteBackgorunds[colorPalette as color]}  
          ${classesHoverNormalButton[colorPalette as color]}  
          px-4 py-1 rounded-md text-white text-lg transition-all ease-in-out`}
        >
          {text}
        </button>
      );
  }
};

export default Button;
