interface Product {
  id: number;
  title: string;
  category: string;
  image_urls: string;
  price: number;
  description: string;
  rating: number;
}

interface User {
  id?: number;
  username: string;
  email: string;
  password: string;
  role: "admin" | "user";
  profile_picture_url?: string;
  created_at?: Date;
  updated_at?: Date;
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

interface AuthContextType {
  isLoggedIn: boolean;
  setIsLoggedIn: (loggedIn: boolean) => void;
  user: User | null;
  setUser: (user: User | null) => void;
}

interface CustomResponse {
  message: string;
  data?: Product | User | Review | Product[] | User[] | Review[];
}
