"use client";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { useModal } from "@/hooks/use-modal";
import { urlFor } from "@/lib/sanity";
import { Check, MessageCircleCode, Ruler, X } from "lucide-react";
import Image from "next/image";

import React from "react";
import { Button } from "../ui/button";
import { whatsappLink } from "@/lib/constants";

const QuickViewModal = () => {
  const { isOpen, onClose, data, type } = useModal();
  const open = isOpen && type === "quick-view";

  if (!data) {
    return null;
  }

  return (
    <Dialog open={open} onOpenChange={onClose}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle className="text-neutral-600 capitalize">
            {data.productInfo?.product_name}
          </DialogTitle>
        </DialogHeader>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3 items-start">
          <div className="aspect-auto h-[300px] relative">
            <Image
              src={urlFor(
                data.productInfo?.product_cover_image.asset._ref
              ).url()}
              alt="product image"
              fill
              className="object-contain"
            />
          </div>
          <div className="flex flex-col gap-3">
            <p className="text-sm text-zinc-700">
              {data.productInfo?.product_description}
            </p>
            <p className="text-sm text-neutral-600 flex items-center gap-2">
              Customizable
              {data.productInfo?.customizable ? (
                <Check className="w-5 h-5 text-green-500" />
              ) : (
                <X className="w-5 h-5 text-rose-500" />
              )}
            </p>
            {!!data.productInfo?.length && (
              <p className="flex items-center gap-2 text-sm text-zinc-400">
                Length <Ruler className="w-5 h-5" /> -{" "}
                <span className="text-neutral-700">
                  {data.productInfo.length.value}{" "}
                  {data.productInfo.length.units}
                </span>
              </p>
            )}
            {data.productInfo?.length_base && data.productInfo.breadth_base && (
              <div className="flex flex-col gap-2">
                <p className="flex items-center gap-2 text-sm text-zinc-400">
                  Dimensions <Ruler className="w-5 h-5" />{" "}
                </p>
                <p className="text-zinc-700 text-sm">
                  {data.productInfo.length_base.value}
                  {data.productInfo.length_base.units} x{" "}
                  {data.productInfo.breadth_base.value}
                  {data.productInfo.breadth_base.units}
                </p>
              </div>
            )}
            {data.productInfo?.base_material && (
              <p className="text-sm text-zinc-500">
                Base Material -{" "}
                <span className="text-zinc-700 capitalize">
                  {data.productInfo.base_material}
                </span>
              </p>
            )}
            {data.productInfo?.colors?.length &&
              data.productInfo?.colors?.length > 0 && (
                <div className="flex flex-col gap-3 ">
                  <span>Colors</span>
                  <div className="flex items-center gap-2">
                    {data.productInfo.colors.map((item, idx) => {
                      return (
                        <div
                          style={{
                            backgroundColor: `${item.color.hex}`,
                            borderRadius: "50%",
                          }}
                          className={`rounded-full w-5 h-5 `}
                          key={idx}
                        ></div>
                      );
                    })}
                  </div>
                </div>
              )}
            <a
              href={whatsappLink}
              target="__blank"
              rel="noopener noreferrer"
              title="Whatsapp"
            >
              <Button size={"icon"} title="Whatsapp" className="w-full mt-4">
                Order Now
              </Button>
            </a>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default QuickViewModal;
