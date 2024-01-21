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
  id: number;
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
  total: number;
  created_at: string;
  updated_at: string;
}

interface CartItem {
  product: Product;
  quantity: number;
}

interface CartContextType {
  cart: CartItem[];
  addToCart: (product: Product, quantity: number = 1) => void;
  removeFromCart: (productId: number) => void;
  updateQuantity: (productId: number, quantity: number) => void;
  clearCart: () => void;
}

interface AuthContextType {
  isLoggedIn: boolean;
  setIsLoggedIn: (loggedIn: boolean) => void;
  user: User | null;
  setUser: (user: User | null) => void;
}

interface CustomResponse {
  message: string;
  data?: Product | User | Review | Order | Product[] | User[] | Review[] | Order[] | number;
}
