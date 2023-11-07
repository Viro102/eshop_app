interface Product {
  id: number;
  title: string;
  category: string;
  image: string;
  price: number;
  description: string;
  rating: number;
}

type ProductCombined = {
  product: Product;
};

export type { Product, ProductCombined };
