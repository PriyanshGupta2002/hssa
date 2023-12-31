"use client";
import React, { useCallback } from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "./ui/carousel";
import { Card, CardContent, CardFooter, CardHeader } from "./ui/card";
import Image from "next/image";
import { urlFor } from "@/lib/sanity";
import { Button } from "./ui/button";
import { useRouter } from "next/navigation";
import ProductCard, { ProductCardProps } from "./product/product-card";

const ProductSection = ({ products }: { products: ProductCardProps[] }) => {
  const router = useRouter();
  const handleNavigation = useCallback(
    (productType: string) => {
      router.push(`/products?product_type=${productType}`);
    },
    [router]
  );
  return (
    <div className="w-full p-1 md:p-4">
      <Carousel
        opts={{
          align: "start",
        }}
        className="w-full max-w-5xl m-auto"
      >
        <CarouselContent>
          {products.map((item, index) => (
            <CarouselItem key={index} className=" md:basis-1/2 lg:basis-1/3  ">
              {/* <Card
                className="overflow-hidden h-full cursor-pointer"
                onClick={() => handleNavigation(item.product_type)}
              >
                <CardHeader className="aspect-auto h-[300px] relative mx-auto ">
                  <Image
                    src={urlFor(item.product_cover_image.asset._ref).url()}
                    alt="image"
                    fill
                    className="h-full w-full object-cover"
                  />
                </CardHeader>
                <CardContent className="flex flex-col gap-3 p-2">
                  <h1 className="text-zinc-600 text-sm font-bold capitalize">
                    {item.product_name}
                  </h1>
                  <p className="text-sm text-neutral-500">
                    {item.product_description.substring(0, 50)}...
                  </p>
                  <p className="text-zinc-800 font-extrabold">
                    <sup className="text-sm font-light">₹</sup>
                    {item.product_price}
                  </p>
                </CardContent>
                <CardFooter className="p-2 w-full">
                  <Button size={"sm"} className="w-full mt-auto">
                    View
                  </Button>
                  <Button size={"sm"} className="w-full mt-auto">
                    QuickView
                  </Button>
                </CardFooter>
              </Card> */}
              <ProductCard
                customizable={item.customizable}
                gender={item.gender}
                product_cover_image={item.product_cover_image}
                product_description={item.product_description}
                product_name={item.product_name}
                product_type={item.product_type}
                product_price={item.product_price}
                slug={item.slug}
                colors={item.colors}
                length={item.length}
                onNavigate={(product_type) => handleNavigation(product_type)}
              />
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="max-lg:hidden left-2" />
        <CarouselNext className="max-lg:hidden right-2" />
      </Carousel>
    </div>
  );
};

export default ProductSection;
