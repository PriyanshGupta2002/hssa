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
  gender: string;
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
}

const filterOptions = [
  {
    placeholderName: "Gender",
    queryKey: "gender",
    options: [
      {
        label: "Male",
        value: "male",
      },
      {
        label: "Female",
        value: "female",
      },
    ],
  },
  {
    placeholderName: "Select Product Type",
    queryKey: "product_type",
    options: [
      { label: "Hair Extensions", value: "hair-extensions" },
      { label: "Hair Topper", value: "hair-topper" },
      { label: "Wig", value: "wig" },
      { label: "Hair Donuts and Buns", value: "hair-donuts-buns" },
      { label: "Patch", value: "patch" },
    ],
  },
];

const productsSearch = [
  { label: "Hair Extensions", value: "hair-extensions", url: "/products" },
  { label: "Hair Topper", value: "hair-topper", url: "/products" },
  { label: "Wig", value: "wig", url: "/products" },
  {
    label: "Hair Donuts and Buns",
    value: "hair-donuts-buns",
    url: "/products",
  },
  { label: "Patch", value: "patch", url: "/products" },
];

const ProductViewer = ({ products }: { products: ProductViewerProps[] }) => {
  return (
    <div className="flex flex-col gap-7">
      <div className="flex items-center gap-4 flex-wrap">
        {filterOptions.map((filOp, idx) => (
          <ProductFilter
            options={filOp.options}
            placeholder={filOp.placeholderName}
            queryKey={filOp.queryKey}
            key={idx}
          />
        ))}

        <ProductSearchPalette productTypes={productsSearch} />
        <Link href="/products">
          <Button size={"sm"}>Remove All Filters</Button>
        </Link>
      </div>
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
          />
        ))}
      </div>
    </div>
  );
};

export default ProductViewer;
