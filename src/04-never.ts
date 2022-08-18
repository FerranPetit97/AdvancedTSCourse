const witgoutEnd = () => {
  while (true) {
    console.log('nunca para de aprender');
  }
};

const fail = (message: string) => {
  throw new Error(message);
};

const example = (input: unknown) => {
  if (typeof input === 'string') {
    return 'es un string';
  } else if (Array.isArray(input)) {
    return 'es un array';
  }
  return fail('not match');
};

console.log(example('Hola'));
console.log(example([1, 1, 1, 1, 1]));
console.log(example(123412314));
console.log('Hola después del fail');
