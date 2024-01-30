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
