export type color = 'red' | 'yellow' | 'green' | 'blue' | 'violet' | 'rose';

export const colors: color[] = [
  'red',
  'yellow',
  'green',
  'blue',
  'violet',
  'rose',
];

export const classesPalleteBackgorunds: { [key in color]: string } = {
  red: 'bg-red-500',
  yellow: 'bg-yellow-500',
  green: 'bg-emerald-500',
  blue: 'bg-blue-500',
  violet: 'bg-purple-500',
  rose: 'bg-rose-500',
};
export const classesPalleteBackgroundAlt: { [key in color]: string } = {
  red: 'bg-red-800',
  yellow: 'bg-amber-600',
  green: 'bg-green-500',
  blue: 'bg-cyan-600',
  violet: 'bg-violet-600',
  rose: 'bg-pink-600',
};
export const classesPalleteBackgorundSofts: { [key in color]: string } = {
  red: 'bg-red-200',
  yellow: 'bg-yellow-200',
  green: 'bg-green-200',
  blue: 'bg-sky-200',
  violet: 'bg-purple-200',
  rose: 'bg-pink-200',
};

export const gradientTextClasses: { [key in color]: string } = {
  red: ' from-red-600 via-red-500 to-rose-500 ',
  yellow: 'from-amber-600 via-yellow-500 to-orange-500',
  green: 'from-emerald-600 via-green-500 to-lime-500',
  blue: 'from-blue-600 via-cyan-500 to-sky-500',
  violet: 'from-violet-600 via-purple-500 to-indigo-500',
  rose: 'from-rose-600 via-pink-500 to-fuchsia-500',
};

export const classesGhostButton: { [key in color]: string } = {
  red: 'border-red-800',
  yellow: 'border-amber-800',
  green: 'border-emerald-800',
  blue: 'border-blue-800',
  violet: 'border-violet-800',
  rose: 'border-pink-800',
};
export const classesHoverNormalButton: { [key in color]: string } = {
  red: 'hover:bg-red-800',
  yellow: 'hover:bg-yellow-800',
  green: 'hover:bg-emerald-800',
  blue: 'hover:bg-blue-800',
  violet: 'hover:bg-purple-800',
  rose: 'hover:bg-rose-800',
};
