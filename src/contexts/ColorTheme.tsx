'use client';
import {
  ReactNode,
  createContext,
  useState,
  Dispatch,
  SetStateAction,
} from 'react';

export const ColorThemeContext = createContext<{
  colorPalette: string;
  setColorPalette: Dispatch<SetStateAction<string>>;
}>({ colorPalette: 'red', setColorPalette: () => {} });

const ColorThemeProvider = ({ children }: { children: ReactNode }) => {
  const [colorPalette, setColorPalette] = useState('red');

  return (
    <ColorThemeContext.Provider value={{ colorPalette, setColorPalette }}>
      {children}
    </ColorThemeContext.Provider>
  );
};

export default ColorThemeProvider;
