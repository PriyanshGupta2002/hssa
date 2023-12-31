"use client";
import { useRouter } from "next/navigation";
import React, { useCallback } from "react";

interface NavItemProps {
  title: string;
  description: string;
  url: string;
}

const NavItem: React.FC<NavItemProps> = ({ title, description, url }) => {
  const router = useRouter();
  const navigateToLink = useCallback(() => {
    router.push(url);
  }, [router, url]);
  return (
    <div
      className="flex flex-col gap-2 p-2 group rounded-md hover:bg-zinc-400/25 cursor-pointer transition-all "
      onClick={navigateToLink}
    >
      <h3 className="text-sm text-neutral-500 group-hover:text-neutral-800">
        {title}
      </h3>
      <p className="text-neutral-800 text-xs group-hover:text-green-500">
        {description}
      </p>
    </div>
  );
};

export default NavItem;
