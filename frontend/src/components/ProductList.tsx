import React from "react";
import { type Product } from "../types";
import ProductCard from "./ProductCard";

const sampleProducts: Product[] = [
  {
    id: 1,
    name: "Платье «Гончарова»",
    currentPrice: 24600,
    originalPrice: 30000,
    imageSrc: "https://ir.ozone.ru/s3/multimedia-u/6670403562.jpg",
    imageAlt: "Платье «Гончарова»",
    category: "Платья",
    imageHoverSrc: "https://avatars.mds.yandex.net/get-mpic/3611742/img_id3047806576894490386.jpeg/orig"
  },
  {
    id: 2,
    name: "Болеро «Агата»",
    currentPrice: 12200,
    originalPrice: 15000,
    imageSrc: "https://ir.ozone.ru/s3/multimedia-u/6670403562.jpg",
    imageAlt: "Болеро «Агата»",
    category: "Болеро",
    imageHoverSrc: "https://avatars.mds.yandex.net/get-mpic/3611742/img_id3047806576894490386.jpeg/orig"
  },
  {
    id: 3,
    name: "Платье «Скарлетт»",
    currentPrice: 10200,
    originalPrice: 12000,
    imageSrc: "https://ir.ozone.ru/s3/multimedia-u/6670403562.jpg",
    imageAlt: "Платье «Скарлетт»",
    category: "Платья",
    imageHoverSrc: "https://avatars.mds.yandex.net/get-mpic/3611742/img_id3047806576894490386.jpeg/orig"
  },
];

const ProductList: React.FC = () => (
  <div className="products">
    {sampleProducts.map(p => <ProductCard key={p.id} product={p} />)}
  </div>
);

export default ProductList;
