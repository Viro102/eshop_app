import { RowDataPacket } from "mysql2";

interface Product extends RowDataPacket {
  id: number;
  title: string;
  category: string;
  image_url: string;
  price: number;
  description: string;
  rating: number;
}

export type { Product };
