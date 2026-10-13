interface Product {
  readonly id: number;
  title: string;
  description?: string;
}

let product: Product = {
  id: 1,
  title: "Product 1",
  description: "Product 1",
};

console.log(product);
