export const createProduct = (
  id: string | number,
  isNew?: boolean,
  stock?: number
) => {
  return {
    id,
    isNew: isNew ?? true,
    stock: stock ?? 10,
  };
};

// Con este idetificador '||' puede generar problemas
// 0 === false
// '' === false
// false === false

const p1 = createProduct(1, true, 12);
console.log(p1);
const p2 = createProduct(1, false);
console.log(p2);
const p3 = createProduct(1);
console.log(p3);
const p4 = createProduct(1, false, 0);
console.log(p4);
