"use client";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import { navLinks } from "@/lib/constants";
import Link from "next/link";
import { Button } from "../ui/button";
import { ArrowRight, ChevronsUpDown, Flame, Grid } from "lucide-react";

const NavHamMenuItem = () => {
  return (
    <div className="mt-8 flex flex-col gap-2 p-2">
      {navLinks.map((item, idx) => (
        <Collapsible key={idx}>
          <CollapsibleTrigger
            className="font-medium text-zinc-600 text-sm"
            key={idx}
            asChild
          >
            <Button className="w-full" size={"sm"} variant={"ghost"}>
              <span>{item.title}</span>
              <ChevronsUpDown className="w-4 h-4 ml-auto text-zinc-600" />
            </Button>
          </CollapsibleTrigger>
          <CollapsibleContent>
            <div className="p-3 flex flex-col gap-3 text-sm text-zinc-600">
              {item.insideLink.map((item, idx) => (
                <Link
                  key={idx}
                  href={item.url}
                  className="bg-zinc-400/20 p-3 rounded-md flex items-center hover:bg-zinc-600/20 hover:text-zinc-800 transition-all group"
                >
                  <span>{item.mainLink}</span>
                  <ArrowRight className="w-4 h-4 ml-auto group-hover:text-green-500 group-hover:-rotate-45 transition-all" />
                </Link>
              ))}
            </div>
          </CollapsibleContent>
        </Collapsible>
      ))}
      <Link href={"/#hot-deals"}>
        {" "}
        <Button
          variant={"ghost"}
          size={"sm"}
          className="group text-zinc-600 w-full"
        >
          Hot Deals
          <Flame className="w-5 h-5 ml-auto group-hover:text-rose-500" />
        </Button>
      </Link>
      <Link href={"/products"}>
        {" "}
        <Button
          variant={"ghost"}
          size={"sm"}
          className="group text-zinc-600 w-full"
        >
          Available Products
          <Grid className="w-5 h-5 ml-auto group-hover:text-rose-500" />
        </Button>
      </Link>
    </div>
  );
};

export default NavHamMenuItem;
