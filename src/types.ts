export interface Product {
  id: string;
  name: string;
  category: string;
  description: string;
  price: number;
  image: string;
  sizes: string[];
  attributes: string[];
  gradient: string;
}

export type UserRole = 'B2C' | 'B2B';

export interface CartItem extends Product {
  quantity: number;
  selectedSize: string;
}
