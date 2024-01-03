import ProductFilter from "@/components/product/product-filter";
import ProductSearchPalette from "@/components/product/product-search-palette";
import ProductViewer from "@/components/product/product-viewer";
import { Button } from "@/components/ui/button";
import { client } from "@/lib/client";
import { CircleOff } from "lucide-react";
import Link from "next/link";
import React from "react";

const GenderProductPage = async ({
  params,
  searchParams,
}: {
  params: {
    gender: "male" | "female";
  };
  searchParams: {
    product_type: string;
  };
}) => {
  const gender = params.gender;
  let products = await client().fetchProductsByGender(gender);
  const options = [];

  if (searchParams.product_type) {
    products = await client().fetchProductsByGenderAndType(
      searchParams.product_type,
      gender
    );
  }
  const productsSearch = [];

  if (gender === "male") {
    options.push(
      { label: "Wig", value: "wig" },
      { label: "Patch", value: "patch" }
    );
    productsSearch.push(
      { label: "Wig", value: "wig", url: "/products/male?product_type=wig" },
      {
        label: "Patch",
        value: "patch",
        url: "/products/male?product_type=patch",
      }
    );
  }
  if (gender === "female") {
    options.push(
      { label: "Hair Extensions", value: "hair-extensions" },
      { label: "Hair Topper", value: "hair-topper" },
      { label: "Hair Donuts and Buns", value: "hair-donuts-buns" },
      { label: "Wig", value: "wig" }
    );
    productsSearch.push(
      {
        label: "Hair Extensions",
        url: "/products/female?product_type=hair-extensions",
      },
      {
        label: "Hair Topper",
        url: "/products/female?product_type=hair-topper",
      },
      { label: "Wig", url: "/products/female?product_type=wig" },
      {
        label: "Hair Donuts and Buns",
        url: "/products/female?product_type=hair-donuts-buns",
      }
    );
  }

  if (products.length === 0) {
    return (
      <div className="min-h-screen flex flex-col gap-4 items-center justify-center">
        <div className="text-sm flex items-center gap-2 md:text-3xl text-gray-500 font-medium ">
          <span> No Products Found</span>
          <CircleOff />
        </div>
        <Link href={`/products/${gender}`}>
          <Button size={"sm"}>Remove Filters</Button>
        </Link>
      </div>
    );
  }
  return (
    <div className="p-4 space-y-4">
      <div className="flex items-center gap-3 flex-wrap">
        <ProductFilter
          options={options}
          placeholder="Select Product Type"
          queryKey="product_type"
        />
        <ProductSearchPalette productTypes={productsSearch} />
        <Link href={`/products/${gender}`}>
          <Button size={"sm"}>Remove All Filters</Button>
        </Link>
      </div>

      <ProductViewer products={products} />
    </div>
  );
};

export default GenderProductPage;
