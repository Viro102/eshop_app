interface Product {
  title: string;
  category: string;
  image: string;
  price: number;
  description: string;
  rating: number;
}

type ProductWhole = {
  product: Product;
};

export type { Product, ProductWhole };
