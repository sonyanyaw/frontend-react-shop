import React, { useState } from 'react';
import './menu.scss';

interface MenuProps {
  onClose: () => void;
}

export const Menu: React.FC<MenuProps> = ({ onClose }) => {
  const [isClosing, setIsClosing] = useState(false);

  const handleClose = () => {
    setIsClosing(true);
    setTimeout(() => {
      onClose();
    }, 300);
  };

  return (
    <div className={`menu ${isClosing ? 'closing' : ''}`}>
      <div className="menu-content">
        <div className="menu-wraper">
          <div className="menu-sidebar">
            <div className="menu-sidebar-wraper">
              
              <div className="close-button" onClick={handleClose}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M18 6L6 18" stroke="#222222" strokeLinecap="square" strokeLinejoin="round"/>
                <path d="M6 6L18 18" stroke="#222222" strokeLinecap="square" strokeLinejoin="round"/>
                </svg>
                
              </div>
              <div className="account-button">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="12" cy="10" r="3" stroke="#222222" strokeLinecap="round"/>
                <circle cx="12" cy="12" r="9" stroke="#222222"/>
                <path d="M18 18.7059C17.6461 17.6427 16.8662 16.7033 15.7814 16.0332C14.6966 15.3632 13.3674 15 12 15C10.6326 15 9.30341 15.3632 8.21858 16.0332C7.13375 16.7033 6.35391 17.6427 6 18.7059" stroke="#222222" strokeLinecap="round"/>
                </svg>

                 
              </div>
              <div className="favorites-button">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M4.45067 13.9082L11.4033 20.4395C11.6428 20.6644 11.7625 20.7769 11.9037 20.8046C11.9673 20.8171 12.0327 20.8171 12.0963 20.8046C12.2375 20.7769 12.3572 20.6644 12.5967 20.4395L19.5493 13.9082C21.5055 12.0706 21.743 9.0466 20.0978 6.92607L19.7885 6.52734C17.8203 3.99058 13.8696 4.41601 12.4867 7.31365C12.2913 7.72296 11.7087 7.72296 11.5133 7.31365C10.1304 4.41601 6.17972 3.99058 4.21154 6.52735L3.90219 6.92607C2.25695 9.0466 2.4945 12.0706 4.45067 13.9082Z" stroke="#222222"/>
                </svg>
                 
              </div>
            </div>
          </div>
          <div className="menu-items">
            <div className="menu-items-wraper">
              <ul>
                <li><a className='menu-title' href='/'>Главная</a></li>
                <li><a className='menu-title' href='/'>Sale</a></li>
                <li><a className='menu-title' href='/'>Каталог</a><img src="./icons/arrow.svg" alt="arrow"/></li>
                <li><a className='menu-title' href='/'>Telegram</a></li>
                <li><a className='menu-title' href='/'>Личный кабинет</a></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};