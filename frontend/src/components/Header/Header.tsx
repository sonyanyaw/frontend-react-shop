import { useState, useEffect, useRef } from 'react';
import { Menu } from '../Menu/Menu';
import './header.scss';
import Marquee from '../ProductGrid/Marquee';
import { CartMenu } from '../Cart/CartMenu';

function Header() {
  const [isMenuOpen, setMenuOpen] = useState(false);
  const [isCartOpen, setCartOpen] = useState(false);
  const headerRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!headerRef.current) return;

      const scrollY = window.scrollY;

      
      const shrinkStart = 50;
      const shrinkEnd = 150;
      const progress = Math.min(1, Math.max(0, (scrollY - shrinkStart) / (shrinkEnd - shrinkStart)));

      
      headerRef.current.style.setProperty('--header-progress', progress.toString());
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      {isMenuOpen && <Menu onClose={() => setMenuOpen(false)} />}
      {isCartOpen && <CartMenu onClose={() => setCartOpen(false)} />}
      <header id="header-content" className="header-content" ref={headerRef}>
        <div className="header-wrapper">
          <div className="header-items">
            <div className="header-items-wrapper shrinkable">
              <div className="item-menu-search">
                <div className="menu-link" onClick={() => setMenuOpen(true)}>
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M5 7H19" stroke="#33363F" strokeWidth="2" strokeLinecap="round"/>
                  <path d="M5 12H19" stroke="#33363F" strokeWidth="2" strokeLinecap="round"/>
                  <path d="M5 17H19" stroke="#33363F" strokeWidth="2" strokeLinecap="round"/>
                  </svg>
                  
                </div>
                <div className="search-link">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="11" cy="11" r="6" stroke="#222222"/>
                  <path d="M20 20L17 17" stroke="#222222" strokeLinecap="round"/>
                  </svg>

                  
                </div>
              </div>
              <div className="item-logo">
                <div className="logo-link-home">shop</div>
              </div>
              <div className="item-cart">
                <div className="cart-link" onClick={() => setCartOpen(true)}>
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M7.5 8.5L7.5 8C7.5 7.53566 7.5 7.30349 7.51926 7.10793C7.70631 5.20882 9.20882 3.70631 11.1079 3.51926C11.3035 3.5 11.5357 3.5 12 3.5C12.4643 3.5 12.6965 3.5 12.8921 3.51926C14.7912 3.7063 16.2937 5.20882 16.4807 7.10793C16.5 7.30349 16.5 7.53566 16.5 8L16.5 8.5" stroke="#222222" strokeLinecap="round"/>
                  <path d="M15.5 13.5V11.5" stroke="#222222" strokeLinecap="round"/>
                  <path d="M8.5 13.5V11.5" stroke="#222222" strokeLinecap="round"/>
                  <path d="M5.5 12.1C5.5 10.4029 5.5 9.55442 6.02721 9.02721C6.55442 8.5 7.40294 8.5 9.1 8.5H14.9C16.5971 8.5 17.4456 8.5 17.9728 9.02721C18.5 9.55442 18.5 10.4029 18.5 12.1V14.5C18.5 17.3284 18.5 18.7426 17.6213 19.6213C16.7426 20.5 15.3284 20.5 12.5 20.5H11.5C8.67157 20.5 7.25736 20.5 6.37868 19.6213C5.5 18.7426 5.5 17.3284 5.5 14.5V12.1Z" stroke="#222222"/>
                  </svg>
                  
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
      <Marquee />
    </>
  );
}

export default Header;