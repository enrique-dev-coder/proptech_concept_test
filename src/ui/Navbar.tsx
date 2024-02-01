'use client';
import { ColorThemeContext } from '@/contexts/ColorTheme';
import { FontThemeContext } from '@/contexts/FontTheme';
import { useContext } from 'react';
import { colors, classesPalleteBackgorunds } from '@/constants/colorConstants';
import { availableFonts } from '@/constants/fontConstants';

const Navbar = () => {
  const { setColorPalette } = useContext(ColorThemeContext);
  const { currentFont, setCurrentFont } = useContext(FontThemeContext);
  console.log(currentFont);
  return (
    <header className="w-full fixed  z-50 bg-white h-[80px] shadow-sm ">
      <nav className="max-w-screen-super-large mx-auto flex items-center h-full justify-between">
        <div>LOGO</div>

        <ul className="flex text-xl gap-4 font-medium">
          <li>Buscar</li>
          <li>Comprar</li>
          <li>Invertir</li>
        </ul>

        <div className="flex gap-2">
          <div>
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
          <div>
            <p>Tipo de Letra</p>
            <select
              className=" bg-slate-600 text-white"
              onChange={(e) => setCurrentFont(e.target.value)}
            >
              {availableFonts.map((font) => (
                <option key={font} value={font}>
                  {font}
                </option>
              ))}
            </select>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
