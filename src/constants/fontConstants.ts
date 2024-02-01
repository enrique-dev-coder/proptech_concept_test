import { Inter, Montserrat, Roboto_Condensed, Poppins } from 'next/font/google';
export type availableFont = 'montserrat' | 'inter' | 'poppins' | 'roboto';

const inter = Inter({ subsets: ['latin'] });
const montserrat = Montserrat({ subsets: ['latin'] });
const roboto = Roboto_Condensed({ subsets: ['latin'] });
const poppins = Poppins({
  weight: ['400', '500', '600', '700', '800', '900'],
  subsets: ['latin'],
});
export const availableFonts: availableFont[] = [
  'montserrat',
  'inter',
  'poppins',
  'roboto',
];

export const fontClases: { [key in availableFont]: string } = {
  montserrat: montserrat.className,
  inter: inter.className,
  poppins: poppins.className,
  roboto: roboto.className,
};
