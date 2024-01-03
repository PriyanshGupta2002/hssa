"use client";
import React, { useCallback, useMemo } from "react";
import { Card, CardContent, CardFooter, CardHeader } from "../ui/card";
import Image from "next/image";
import { urlFor } from "@/lib/sanity";
import { useRouter } from "next/navigation";
import { Button } from "../ui/button";
import { EyeIcon } from "lucide-react";
import { useModal } from "@/hooks/use-modal";
import { whatsappLink } from "@/lib/constants";

export interface ProductCardProps {
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
  base_material?: string;
  colors?: {
    color: {
      hex: string;
    };
  }[];
  hair_type: string;
  onNavigate?: (product_type: string, gender: "male" | "female") => void;
}
const ProductCard: React.FC<ProductCardProps> = ({
  gender,
  product_cover_image,
  product_description,
  product_name,
  product_price,
  product_type,
  slug,
  customizable,
  length,
  colors,
  length_base,
  breadth_base,
  base_material,
  onNavigate,
  hair_type,
}) => {
  const handleNavigation = () => {
    if (onNavigate && product_type && gender) {
      onNavigate(product_type, gender);
      return;
    }
  };
  const { onOpen } = useModal();
  const productInfo = useMemo(() => {
    return {
      gender,
      product_cover_image,
      product_description,
      product_name,
      product_price,
      product_type,
      slug,
      customizable,
      length,
      colors,
      length_base,
      breadth_base,
      base_material,
      hair_type,
    };
  }, [
    gender,
    product_cover_image,
    product_description,
    product_name,
    product_price,
    product_type,
    slug,
    customizable,
    length,
    colors,
    length_base,
    breadth_base,
    base_material,
    hair_type,
  ]);
  const handleOpen = useCallback(
    (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
      e.stopPropagation();
      onOpen("quick-view", { productInfo });
    },
    [onOpen, productInfo]
  );

  return (
    <Card
      className="overflow-hidden h-full cursor-pointer"
      onClick={handleNavigation}
    >
      <CardHeader className="aspect-auto h-[300px] relative mx-auto ">
        <Image
          src={urlFor(product_cover_image.asset._ref).url()}
          alt="image"
          fill
          className="h-full w-full object-cover"
        />
      </CardHeader>
      <CardContent className="flex flex-col gap-3 p-2">
        <h1 className="text-zinc-600 text-sm font-bold capitalize">
          {product_name}
        </h1>
        <p className="text-sm text-neutral-500">{product_description}</p>
        <p className="text-zinc-800 font-extrabold">
          <sup className="text-sm font-light">₹</sup>
          {product_price}
        </p>
      </CardContent>
      <CardFooter className="p-2 w-full">
        {onNavigate && (
          <Button size={"sm"} className="w-full mt-auto">
            View
          </Button>
        )}
        {!onNavigate && (
          <a
            target="__blank"
            rel="noopener noreferrer"
            title="Whatsapp"
            href={whatsappLink}
            className="w-full"
          >
            <Button size={"sm"} className="w-full mt-auto">
              Get
            </Button>
          </a>
        )}
        <Button
          size={"sm"}
          variant={"link"}
          className="w-full mt-auto ml-2"
          onClick={handleOpen}
        >
          QuickView
          <EyeIcon className="w-5 h-5 ml-2" />
        </Button>
      </CardFooter>
    </Card>
  );
};

export default ProductCard;
