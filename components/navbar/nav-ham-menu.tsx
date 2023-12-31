"use client";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Menu } from "lucide-react";
import NavMenu from "./nav-menu";
import NavHamMenuItem from "./nav-ham-menu-item";

const NavHamMenu = () => {
  return (
    <Sheet>
      <SheetTrigger className="hover:bg-zinc-400/20 transition-all p-2 bg-zinc-500/20 rounded-full hover:rounded-md">
        <Menu className="w-5 h-5 text-neutral-600" />
      </SheetTrigger>
      <SheetContent className="p-2">
        <NavHamMenuItem />
      </SheetContent>
    </Sheet>
  );
};

export default NavHamMenu;
