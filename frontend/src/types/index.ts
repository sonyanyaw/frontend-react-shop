export interface Product {
  id: number;
  name: string;
  currentPrice: number;
  originalPrice: number;

  imageSrc: string;
  imageAlt: string;
  category: string;
  imageHoverSrc?: string;
}

export interface CartItem extends Product {
  quantity: number;
}

export interface CartState {
  items: CartItem[];
}