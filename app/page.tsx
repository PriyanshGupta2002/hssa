import HeroSection from "@/components/hero-section";
import ProductSection from "@/components/product-section";

import { client } from "@/lib/client";
import { Flame } from "lucide-react";

import React from "react";
const HomePage = async () => {
  const allProducts = await client().fetchProducts();
  const hotDealsProducts = await client().fetchHotDealsProducts();

  return (
    <div className="flex flex-col space-y-11 p-4">
      <HeroSection />
      <div className="w-full">
        <h3 className="text-zinc-600 text-3xl md:text-5xl  mb-6 p-2 font-bold  text-center ">
          Featured <span className="text-green-500">Products </span>
        </h3>
        <ProductSection products={allProducts} />
      </div>
      <div className="w-full" id="hot-deals">
        <div className="text-3xl md:text-5xl flex items-center justify-center text-zinc-400 mb-6 p-2 font-bold  text-center ">
          Hot Deals <Flame className="w-10 h-10 ml-2 text-rose-600" />
        </div>
        <ProductSection products={hotDealsProducts} />
      </div>
    </div>
  );
};

export default HomePage;
