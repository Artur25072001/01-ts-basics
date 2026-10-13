function getFirstElement<T>(array: T[]): T {
  return array[0];
}

const numbers = [1, 2, 3];
const firstNumber = getFirstElement<number>(numbers);
console.log(firstNumber);

const strings = ["a", "b", "c"];
const firstString = getFirstElement<string>(strings);
console.log(firstString);

type Product = {
  readonly id: number;
  description: string;
};
const products = [
  { id: 1, description: "Product 1" },
  { id: 2, description: "Product 2" },
  { id: 3, description: "Product 3" },
];
const firstProduct = getFirstElement<Product>(products);
console.log(firstProduct);

getFirstElement(numbers);
