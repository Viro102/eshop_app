export class Product {
  title: string;
  name: string;
  price: number;
  category: string;
  description: string;
  constructor(title: string, name: string, price: number, category: string, description: string) {
    this.title = title;
    this.name = name;
    this.price = price;
    this.category = category;
    this.description = description;
  }
}
