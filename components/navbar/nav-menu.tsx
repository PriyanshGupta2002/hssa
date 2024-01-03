"use client";

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import NavItem from "./nav-item";
import { navLinks } from "@/lib/constants";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { Flame, GanttChart, Grid } from "lucide-react";
const NavMenu = () => {
  return (
    <NavigationMenu>
      <NavigationMenuList className="space-x-4 bg-zinc-200 p-1 rounded-md ">
        {navLinks.map((link, idx) => (
          <NavigationMenuItem key={idx}>
            <NavigationMenuTrigger className="bg-transparent ">
              {link.title}
            </NavigationMenuTrigger>
            <NavigationMenuContent>
              <div className="grid grid-cols-1 w-[300px] p-2">
                {link.insideLink.map((item, idx) => (
                  <NavItem
                    title={item.mainLink}
                    description={item.description}
                    key={idx}
                    url={item.url}
                  />
                ))}
              </div>
            </NavigationMenuContent>
          </NavigationMenuItem>
        ))}

        <NavigationMenuItem className="bg-transparent text-neutral-500   ">
          <Link href="/products" legacyBehavior passHref>
            <NavigationMenuLink className={cn(navigationMenuTriggerStyle())}>
              Available Products
              <GanttChart className="w-5 h-5 ml-2 text-green-600" />
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>
        <NavigationMenuItem className="bg-transparent text-neutral-500  ">
          <Link href="/#hot-deals" legacyBehavior passHref className="group">
            <NavigationMenuLink className={cn(navigationMenuTriggerStyle())}>
              Hot Deals
              <Flame className="w-5 h-5 ml-2 group-hover:text-rose-500" />
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
};

export default NavMenu;
