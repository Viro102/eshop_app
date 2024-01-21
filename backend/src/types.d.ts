interface User {
  id: number;
  username: string;
  email: string;
  password: string;
  created_at: Date;
  updated_at: Date;
}

interface Product {
  id: number;
  title: string;
  category: string;
  image_url: string;
  price: number;
  description: string;
  rating: number;
}

interface Review {
  id: number;
  user_id: number;
  product_id: number;
  rating: number;
  comment: string;
  created_at: Date;
  updated_at: Date;
}

interface Order {
  id: number;
  user_id: number;
  created_at: Date;
  updated_at: Date;
}

interface OrderItem {
  id: number;
  order_id: number;
  product_id: number;
  quantity: number;
  price: number;
}

interface DecodedToken {
  userId: number;
  iat: number;
  exp: number;
}
