import React from 'react';
import { type Product } from '../../types'; 
import ProductCard from '../ProductCard/ProductCard';

import './productGrid.scss';

const exampleProducts: Product[] = [
  {
    id: 1,
    name: "Кружевное болеро",
    currentPrice: 8200,
    originalPrice: 9500,
    imageSrc: "https://ir.ozone.ru/s3/multimedia-u/6670403562.jpg",
    imageHoverSrc: "https://avatars.mds.yandex.net/get-mpic/3611742/img_id3047806576894490386.jpeg/orig",
    imageAlt: "Кружевное болеро",
    category: "Болеро"
  },
  {
    id: 2,
    name: "Блуза в горох",
    currentPrice: 10200,
    originalPrice: 12000,
    imageSrc: "https://ir.ozone.ru/s3/multimedia-u/6670403562.jpg",
    imageHoverSrc: "https://avatars.mds.yandex.net/get-mpic/3611742/img_id3047806576894490386.jpeg/orig",
    imageAlt: "Блуза в горох",
    category: "Блузы"
  },
  {
    id: 3,
    name: "Юбка шелковая с кружевом миди",
    currentPrice: 9200,
    originalPrice: 11000,
    imageSrc: "https://ir.ozone.ru/s3/multimedia-u/6670403562.jpg",
    imageHoverSrc: "https://avatars.mds.yandex.net/get-mpic/3611742/img_id3047806576894490386.jpeg/orig",
    imageAlt: "Юбка шелковая с кружевом миди",
    category: "Юбки"
  },
  {
    id: 4,
    name: "Платье «Саша»",
    currentPrice: 16500,
    originalPrice: 18000,
    imageSrc: "https://ir.ozone.ru/s3/multimedia-u/6670403562.jpg",
    imageHoverSrc: "https://avatars.mds.yandex.net/get-mpic/3611742/img_id3047806576894490386.jpeg/orig",
    imageAlt: "Платье «Саша»",
    category: "Платья"
  },
  {
    id: 5,
    name: "Платье «Гончарова»",
    currentPrice: 24600,
    originalPrice: 27000,
    imageSrc: "https://ir.ozone.ru/s3/multimedia-u/6670403562.jpg",
    imageHoverSrc: "https://avatars.mds.yandex.net/get-mpic/3611742/img_id3047806576894490386.jpeg/orig",
    imageAlt: "Платье «Гончарова»",
    category: "Платья"
  },
  {
    id: 6,
    name: "Платье «Диана»",
    currentPrice: 14600,
    originalPrice: 16000,
    imageSrc: "https://ir.ozone.ru/s3/multimedia-u/6670403562.jpg",
    imageHoverSrc: "https://avatars.mds.yandex.net/get-mpic/3611742/img_id3047806576894490386.jpeg/orig",
    imageAlt: "Платье «Диана»",
    category: "Платья"
  }
];

interface ProductGridProps {
  products?: Product[];
}

const ProductGrid: React.FC<ProductGridProps> = ({ products = exampleProducts }) => {
  return (
    <div className="product-grid-container">
      <div className="product-grid">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default ProductGrid;