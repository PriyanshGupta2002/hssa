import Image from "next/image";
import React from "react";

const HeroSection = () => {
  return (
    <div className="w-full  p-5 md:p-14 gap-5 relative  max-w-6xl  place-items-center shadow-md m-auto mt-8 -z-30 bg-zinc-100 grid grid-cols-1 md:grid-cols-2">
      {/* <div className="absolute -z-10 bg-gradient-to-r from-blue-500 to-cyan-500 -z-1 blur-md  inset-0" /> */}

      <div className="text-3xl md:text-4xl lg:text-5xl text-zinc-500 font-bold">
        Discover Your Perfect Look <br />
        <span className="text-green-500">Premium Wigs</span> , <br />
        <span className="text-green-500"> Extensions</span> and{" "}
        <span className="text-green-500"> Hair Essentials</span> for Men and
        Women
      </div>
      <Image
        src={"/assets/shop.svg"}
        width={400}
        height={400}
        className="object-contain"
        alt="shop"
      />
    </div>
  );
};

export default HeroSection;
