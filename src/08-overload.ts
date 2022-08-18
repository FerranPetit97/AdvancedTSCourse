// Petit => [P,e,t,i,t] => string => string[]
// [P,e,t,i,t] => Petit => string[] => string

function parseStr(input: string | string[]): string | string[] {
  if (Array.isArray(input)) {
    return input.join('');
  } else {
    return input.split('');
  }
}

const rtaArray = parseStr('Petit');
// rtaArray.reverse() | no detecta que esto es una Array de manera nativa
if (Array.isArray(rtaArray)) {
  rtaArray.reverse();
}
console.log('rtaArray: Petit = ', rtaArray);

const rtaString = parseStr(['P', 'e', 't', 'i', 't']);
// rtaString.toLowerCase(); | no detecta que esto es un String de manera nativa
if (typeof rtaString === 'string') {
  rtaString.toLowerCase();
}
console.log('rtaString: [P, e, t, i, t] = ', rtaString);
