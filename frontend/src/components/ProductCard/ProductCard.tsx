import React, { useState } from 'react';
import { type Product } from '../../types'; 
import { useCart } from '../../context/useCart';
import { useFavorites } from '../../context/useFavorites';
import './productCard.scss';

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {

  // const [isFavorite, setIsFavorite] = useState(false);
  const [status, setStatus] = useState<'idle' | 'loading' | 'success'>('idle');
  const { addToCart, cartItems } = useCart();
  const { addToFavorites, removeFromFavorites, isInFavorites } = useFavorites();

  const isInCart = cartItems.some(item => item.id === product.id);
  const isFavorite = isInFavorites(product.id);


  const handleFavoriteClick = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    
    // Переключаем состояние на противоположное
    // setIsFavorite(!isFavorite);
    if (isFavorite) {
      removeFromFavorites(product.id);
    } else {
      addToFavorites(product);
    }
    
    // запрос на сервер
    // addToFavorites(product.id)
  };

  const handleAddToCart = (e: React.MouseEvent) => {
    e.preventDefault(); // ← важно! иначе сработает <a href>
    e.stopPropagation();

    setStatus('loading');
    addToCart(product);

    setTimeout(() => {
      setStatus('success');
      setTimeout(() => setStatus('idle'), 1500); // через 1.5с вернёмся к idle
    }, 300);
  };
  
  return (
    <a href={`/product/${product.id}`} className="product-card">
      <div className="product-card__image-wrapper">
        <div className="product-card__image-container">
          <button 
            className={`product-card__favorite ${isFavorite ? 'product-card__favorite--active' : ''}`} 
            onClick={handleFavoriteClick}
            aria-label={isFavorite ? "Удалить из избранного" : "Добавить в избранное"}
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path 
                d="M4.45067 13.9082L11.4033 20.4395C11.6428 20.6644 11.7625 20.7769 11.9037 20.8046C11.9673 20.8171 12.0327 20.8171 12.0963 20.8046C12.2375 20.7769 12.3572 20.6644 12.5967 20.4395L19.5493 13.9082C21.5055 12.0706 21.743 9.0466 20.0978 6.92607L19.7885 6.52734C17.8203 3.99058 13.8696 4.41601 12.4867 7.31365C12.2913 7.72296 11.7087 7.72296 11.5133 7.31365C10.1304 4.41601 6.17972 3.99058 4.21154 6.52735L3.90219 6.92607C2.25695 9.0466 2.4945 12.0706 4.45067 13.9082Z" 
                stroke="currentColor"
              />
            </svg>
          </button>
          <img
            src={product.imageSrc}
            alt={product.imageAlt}
            className="product-card__image"
          />
          {/* Отображаем второе изображение, если оно есть */}
          {product.imageHoverSrc && (
            <img
              src={product.imageHoverSrc}
              alt={product.imageAlt}
              className="product-card__image product-card__image--hover"
            />
          )}

          <button className="product-card__add-button" aria-label="Добавить в корзину" onClick={handleAddToCart}>
            {/* Плашка с надписью — СЛЕВА от круга */}
            <span className="product-card__add-label">Добавить в корзину</span>

            {/* Круг с плюсиком — справа */}
            <span className="product-card__add-circle">
              {/* <svg
                className="product-card__add-icon"
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M8 3.333V12.667M3.333 8H12.667"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                />
              </svg> */}
              {status === 'loading' ? (
                // Спиннер
                <svg
                  className="product-card__spinner"
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2" fill="none" />
                  <path
                    d="M12 2V6"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    transform="rotate(0 12 12)"
                  >
                    <animateTransform
                      attributeName="transform"
                      type="rotate"
                      dur="1s"
                      repeatCount="indefinite"
                      values="0 12 12;360 12 12"
                    />
                  </path>
                </svg>
              ) : status === 'success' ? (
                // Галочка
                <svg
                  className="product-card__check"
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M3 8L6.5 11.5L13 5"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              ) : (
                // Плюсик
                <svg
                  className={`product-card__add-icon ${isInCart ? 'product-card__add-icon--in-cart' : ''}`}
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M8 3.333V12.667M3.333 8H12.667"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                  />
                </svg>
              )}
            </span>
          </button>
        </div>
      </div>
      <div className="product-card__info">
        <h3 className="product-card__name">{product.name}</h3>
          <span className="product-card__current-price">{product.currentPrice.toLocaleString()}{'\u20BD'}</span>
      </div>
    </a>
  );
};

export default ProductCard;