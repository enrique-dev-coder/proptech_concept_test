'use client';
import { ColorThemeContext } from '@/contexts/ColorTheme';
import { useContext } from 'react';
import { colors, classesPalleteBackgorunds } from '@/constants/colorConstants';

const Navbar = () => {
  const { setColorPalette } = useContext(ColorThemeContext);

  return (
    <header className="w-full fixed  z-50 bg-white h-[80px] ">
      <nav className="max-w-screen-super-large mx-auto flex items-center h-full justify-between">
        <div>LOGO</div>

        <ul className="flex text-xl gap-4 font-medium">
          <li>Buscar</li>
          <li>Comprar</li>
          <li>Invertir</li>
        </ul>

        <div className="flex flex-col">
          <p>Paleta de colores</p>
          <ul className="flex gap-1">
            {colors.map((item) => (
              <li
                key={item}
                onClick={() => setColorPalette(item)}
                className={`${classesPalleteBackgorunds[item]} button w-4 h-4 rounded-full cursor-pointer `}
              ></li>
            ))}
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
