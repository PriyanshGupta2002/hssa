"use client";

import Link from "next/link";
import { Button } from "../ui/button";
import ProductCard from "./product-card";
import ProductFilter from "./product-filter";
import ProductSearchPalette from "./product-search-palette";

interface ProductViewerProps {
  product_type: string;
  slug: {
    current: string;
  };
  gender: "male" | "female";
  product_cover_image: {
    asset: {
      _ref: string;
    };
  };
  product_name: string;
  product_price: string;
  product_description: string;
  customizable: boolean;
  length?: {
    value: number;
    units: string;
  };
  length_base?: {
    value: number;
    units: string;
  };
  breadth_base?: {
    value: number;
    units: string;
  };
  colors?: {
    color: {
      hex: string;
    };
  }[];
  base_material?: string;
  hair_type: string;
}

const ProductViewer = ({ products }: { products: ProductViewerProps[] }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-4 p-1">
      {products.map((item, idx) => (
        <ProductCard
          gender={item.gender}
          product_cover_image={item.product_cover_image}
          product_description={item.product_description}
          product_name={item.product_name}
          product_price={item.product_price}
          product_type={item.product_type}
          slug={item.slug}
          key={idx}
          customizable={item.customizable}
          length={item.length}
          colors={item.colors}
          length_base={item.length_base}
          breadth_base={item.breadth_base}
          base_material={item.base_material}
          hair_type={item.hair_type}
        />
      ))}
    </div>
  );
};

export default ProductViewer;
