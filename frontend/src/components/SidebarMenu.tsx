
import React from "react";

interface Props { onClose: () => void; }

const categories = [
  "АКСЕССУАРЫ","БРЮКИ","ВЕРХНЯЯ ОДЕЖДА","КОСТЮМЫ","ПИДЖАКИ","ПЛАТЬЯ","ЮБКИ"
];

const SidebarMenu: React.FC<Props> = ({ onClose }) => (
  <div className="sidebar">
    <button onClick={onClose}>✕ Закрыть</button>
    <ul>
      {categories.map(cat => <li key={cat}>{cat}</li>)}
    </ul>
  </div>
);

export default SidebarMenu;
