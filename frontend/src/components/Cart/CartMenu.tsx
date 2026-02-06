import React, { useState } from 'react';
import { useCart } from '../../context/CartContext';
import './cartMenu.scss';

interface CartMenuProps {
  onClose: () => void;
}

export const CartMenu: React.FC<CartMenuProps> = ({ onClose }) => {
  const [isClosing, setIsClosing] = useState(false);
  const { cartItems, removeFromCart, updateQuantity } = useCart();


  const handleClose = () => {
    setIsClosing(true); 
    setTimeout(() => {
      onClose(); 
    }, 300);
  };

  // const totalItems = cartItems.reduce((sum, item) => sum + item.quantity, 0);
  const totalPrice = cartItems.reduce((sum, item) => sum + item.currentPrice * item.quantity, 0);

  return (
    <div className={`cart-menu ${isClosing ? 'is-closing' : ''}`}>
      <div className="cart-menu-overlay" onClick={handleClose}></div>
      <div className="cart-menu-content">
        <div className="cart-menu-header">
          <span>Моя корзина</span>
          <div className="close-button" onClick={handleClose}>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M9 6L15 12L9 18" stroke="#222222"/>
            </svg>
          </div>
        </div>
        <div className="cart-menu-items">
          {cartItems.length === 0 ? (
            <>
              <svg width="200" height="200" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M7.5 8.5L7.5 8C7.5 7.53566 7.5 7.30349 7.51926 7.10793C7.70631 5.20882 9.20882 3.70631 11.1079 3.51926C11.3035 3.5 11.5357 3.5 12 3.5C12.4643 3.5 12.6965 3.5 12.8921 3.51926C14.7912 3.7063 16.2937 5.20882 16.4807 7.10793C16.5 7.30349 16.5 7.53566 16.5 8L16.5 8.5" stroke="#7f7f7fff" strokeLinecap="round"/>
              <path d="M15.5 13.5V11.5" stroke="#7f7f7fff" strokeLinecap="round"/>
              <path d="M8.5 13.5V11.5" stroke="#7f7f7fff" strokeLinecap="round"/>
              <path d="M5.5 12.1C5.5 10.4029 5.5 9.55442 6.02721 9.02721C6.55442 8.5 7.40294 8.5 9.1 8.5H14.9C16.5971 8.5 17.4456 8.5 17.9728 9.02721C18.5 9.55442 18.5 10.4029 18.5 12.1V14.5C18.5 17.3284 18.5 18.7426 17.6213 19.6213C16.7426 20.5 15.3284 20.5 12.5 20.5H11.5C8.67157 20.5 7.25736 20.5 6.37868 19.6213C5.5 18.7426 5.5 17.3284 5.5 14.5V12.1Z" stroke="#7f7f7fff"/>
              </svg>
          
              <p>Нет товаров в корзине.</p>
            </>
          ) : (
            <ul className="cart-items-list">
              {cartItems.map(item => (
                <li key={item.id} className="cart-item">
                  <img src={item.imageSrc} alt={item.name} className="cart-item__image" />
                  <div className="cart-item__info">
                    <h4>{item.name}</h4>
                    
                  <div className="cart-item__controls">
                    <button
                      onClick={() => updateQuantity(item.id, item.quantity - 1)}
                      disabled={item.quantity <= 1}
                    >
                      −
                    </button>
                    <span>{item.quantity}</span>
                    <button onClick={() => updateQuantity(item.id, item.quantity + 1)}>
                      +
                    </button> <p>× {item.currentPrice.toLocaleString()} ₽</p>
                  </div>
                  
                  </div>
                  <button
                    className="cart-item__remove"
                    onClick={() => removeFromCart(item.id)}
                  >
                    ×
                  </button>
                </li>
              ))}
            </ul>
          )}
        </div>
        {cartItems.length > 0 && (
          <div className="cart-menu-footer">
            <div className="cart-total">
              Итого: <strong>{totalPrice.toLocaleString()} ₽</strong>
            </div>
            <button className="checkcart-button">Посмотреть корзину</button>
            <button className="checkout-button">Оформить заказ</button>
          </div>
        )}

        
        <button className="return-button" onClick={handleClose}>Вернуться в магазин</button>
      </div>
    </div>
  );
};