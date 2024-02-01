'use client';
import {
  ReactNode,
  createContext,
  useState,
  Dispatch,
  SetStateAction,
} from 'react';

export const FontThemeContext = createContext<{
  currentFont: string;
  setCurrentFont: Dispatch<SetStateAction<string>>;
}>({
  currentFont: 'inter',
  setCurrentFont: () => {},
});

export const FontThemeProvider = ({ children }: { children: ReactNode }) => {
  const [currentFont, setCurrentFont] = useState('inter');

  return (
    <FontThemeContext.Provider value={{ currentFont, setCurrentFont }}>
      {children}
    </FontThemeContext.Provider>
  );
};
