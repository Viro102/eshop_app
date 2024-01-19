interface Product {
  id: number;
  title: string;
  category: string;
  image_url: string;
  price: number;
  description: string;
  rating: number;
}

interface User {
  id: number;
  username: string;
  email: string;
  password: string;
  created_at: Date;
  updated_at: Date;
}

interface Review {
  id?: number;
  user_id: number;
  product_id: number;
  rating: number;
  comment: string;
  created_at?: Date;
  updated_at?: Date;
}

interface AuthContextType {
  isLoggedIn: boolean;
  setIsLoggedIn: (loggedIn: boolean) => void;
  user: User | null;
  setUser: (user: User | null) => void;
}

interface AuthResponse {
  message: string;
  isAuthorized: boolean;
}
