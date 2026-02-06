import React, { useState } from "react";
import SidebarMenu from "./SidebarMenu";
import CartSidebar from "./CartSidebar";

export const Header: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [cartOpen, setCartOpen] = useState(false);

  return (
    <header className="header">
      <button onClick={() => setMenuOpen(true)}>☰ МЕНЮ</button>
      <h1>BARDAK</h1>
      <button onClick={() => setCartOpen(true)}>🛒 Корзина</button>

      {menuOpen && <SidebarMenu onClose={() => setMenuOpen(false)} />}
      {cartOpen && <CartSidebar onClose={() => setCartOpen(false)} />}
    </header>
  );
};
