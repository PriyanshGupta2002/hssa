import ProductFilter from "@/components/product/product-filter";
import ProductSearchPalette from "@/components/product/product-search-palette";
import ProductViewer from "@/components/product/product-viewer";
import { Button } from "@/components/ui/button";
import { client } from "@/lib/client";
import { filterOptions, productsSearch } from "@/lib/constants";
import { CircleOff } from "lucide-react";
import Link from "next/link";
import React from "react";

const ProductsPage = async ({
  searchParams,
}: {
  searchParams: {
    product_type?: string;
    gender?: "male" | "female";
  };
}) => {
  const { product_type, gender } = searchParams;
  let products = await client().fetchProducts();
  if (product_type) {
    products = await client().fetchProductsByType(product_type);
  }
  if (gender) {
    products = await client().fetchProductsByGender(gender);
  }
  if (product_type && gender) {
    products = await client().fetchProductsByGenderAndType(
      product_type,
      gender
    );
  }

  if (products.length === 0) {
    return (
      <div className="min-h-screen flex flex-col gap-4 items-center justify-center">
        <div className="text-sm flex items-center gap-2 md:text-3xl text-gray-500 font-medium ">
          <span> No Products Found</span>
          <CircleOff />
        </div>
        <Link href={"/products"}>
          <Button size={"sm"}>Remove Filters</Button>
        </Link>
      </div>
    );
  }

  return (
    <div className="p-5 space-y-4">
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
      <ProductViewer products={products} />
    </div>
  );
};

export default ProductsPage;
