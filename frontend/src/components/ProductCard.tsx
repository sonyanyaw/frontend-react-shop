import React, { useContext } from "react";
import { type Product } from "../types";
import { CartContext } from "../context/CartContext";

const ProductCard: React.FC<{ product: Product }> = ({ product }) => {
  const cart = useContext(CartContext);

  return (
    <div className="product-card">
      <div className="image-block">
        <img src={product.imageSrc} alt={product.imageAlt} />
      </div>
      <h3>{product.name}</h3>
      <p>{product.currentPrice} ₽</p>
      <button onClick={() => cart?.addToCart && cart.addToCart(product)}>В корзину</button>
    </div>
  );
};

export default ProductCard;
