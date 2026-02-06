// src/components/CartSidebar.tsx
import React, { useContext } from "react";
import { CartContext } from "../context/CartContext";

interface Props { onClose: () => void; }

const CartSidebar: React.FC<Props> = ({ onClose }) => {
  const cart = useContext(CartContext);

  return (
    <div className="cart-sidebar">
      <button onClick={onClose}>✕ Закрыть</button>
      <h2>Моя корзина</h2>

      <ul>
        {cart?.cartItems.map(item => (
          <li key={item.id}>
            {item.name} — {item.price} ₽
            <button onClick={() => cart.removeFromCart(item.id)}>Удалить</button>
          </li>
        ))}
      </ul>

      <button>Оформить заказ</button>
    </div>
  );
};

export default CartSidebar;
