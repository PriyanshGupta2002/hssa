"use client";

import React, { useCallback, useState } from "react";
import {
  Command,
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
  CommandShortcut,
} from "@/components/ui/command";
import { Search, TrendingUp } from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";
interface ProductSearchPaletteProps {
  label: string;
  value: string;
  url: string;
}
const ProductSearchPalette = ({
  productTypes,
}: {
  productTypes: ProductSearchPaletteProps[];
}) => {
  const [open, setOpen] = useState(false);
  const router = useRouter();
  const handleNavigation = useCallback(
    (url: string, value: string) => {
      router.push(`${url}?product_type=${value}`);
      setOpen(false);
    },
    [router]
  );
  return (
    <>
      <div
        className="bg-zinc-200 text-neutral-500 flex items-center gap-1 p-2 text-sm rounded-md"
        onClick={() => setOpen(true)}
      >
        Search For Products <Search className="ml-2 text-zinc-400 h-5 w-5" />
      </div>
      <CommandDialog open={open} onOpenChange={setOpen}>
        <CommandInput placeholder="Type a command or search..." />
        <CommandList className="p-3">
          {productTypes.map((item: ProductSearchPaletteProps, idx: number) => (
            <CommandItem
              key={idx}
              onSelect={() => handleNavigation(item.url, item.value)}
              className="text-zinc-400 group hover:text-zinc-700 transition-all hover:bg-zinc-400/20 cursor-pointer"
            >
              <span>{item.label}</span>
              <TrendingUp className="ml-auto w-5 h-5 group-hover:text-green-500 transition-all" />
            </CommandItem>
          ))}
        </CommandList>
      </CommandDialog>
    </>
  );
};

export default ProductSearchPalette;
``;
