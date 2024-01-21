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
  created_at?: string;
  updated_at?: string;
}

interface Review {
  id?: number;
  user_id: number;
  product_id: number;
  rating: number;
  comment: string;
  created_at?: string;
  updated_at?: string;
}

interface Order {
  id: number;
  user_id: number;
  created_at: string;
  updated_at: string;
}

interface OrderDetails {
  order_id: number;
  products: Product[];
  total: number;
  created_at: string;
  updated_at: string;
}

interface CartContextType {
  cart: Product[];
  removeFromCart: (id: number) => void;
  addToCart: (product: Product) => void;
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
