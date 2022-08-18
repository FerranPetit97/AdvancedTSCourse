// Petit => [P,e,t,i,t] => string => string[]
// [P,e,t,i,t] => Petit => string[] => string

export function parseStr(input: string): string[];
export function parseStr(input: string[]): string;
export function parseStr(input: number): boolean;

// export function parseStr(input: string | string[]): string | string[] {
//   if (Array.isArray(input)) {
//     return input.join('');
//   } else {
//     return input.split('');
//   }
// }

export function parseStr(input: unknown): unknown {
  if (Array.isArray(input)) {
    return input.join('');
  } else if (typeof input === 'string') {
    return input.split('');
  } else if (typeof input === 'number') {
    return true;
  }
}

const rtaArray = parseStr('Petit');
rtaArray.reverse();
console.log('rtaArray: Petit = ', rtaArray);

const rtaString = parseStr(['P', 'e', 't', 'i', 't']);
rtaString.toLowerCase();
console.log('rtaString: [P, e, t, i, t] = ', rtaString);

const rtaBoolean = parseStr(2);
