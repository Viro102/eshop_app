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

interface DecodedToken {
  userId: number;
  iat: number;
  exp: number;
}
