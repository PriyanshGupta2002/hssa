export const navLinks = [
  {
    title: "Men",
    insideLink: [
      {
        mainLink: "All Products",
        description:
          "Browse our entire collection of men's hair products for a variety of styles.",
        url: "/products/male",
      },
      {
        mainLink: "Wig",
        description:
          "Discover confident transformations with our premium men's wigs collection.",
        url: "/products/male?product_type=wig",
      },
      {
        mainLink: "Patches",
        description:
          "Transform your look seamlessly with our premium men's hair patches.",
        url: "/products/male?product_type=patch",
      },
    ],
  },
  {
    title: "Women",
    insideLink: [
      {
        mainLink: "All Products",
        description:
          "Explore our complete range of women's hair products for various styling options.",
        url: "/products/female",
      },
      {
        mainLink: "Clip-in Extensions",
        description:
          "Enhance your style with ease using our clip-in hair extensions for women.",
        url: "/products/female?product_type=hair-extensions",
      },
      {
        mainLink: "Hair Topper",
        description:
          "Achieve natural volume and coverage with our women's hair topper solutions.",
        url: "/products/female?product_type=hair-topper",
      },
      {
        mainLink: "Wig",
        description:
          "Explore versatile styles with our collection of premium women's wigs.",
        url: "/products/female?product_type=hair-topper",
      },
      {
        mainLink: "Donuts and Buns",
        description:
          "Elevate your hairstyles effortlessly with our chic hair donuts and buns.",
        url: "/products/female?product_type=hair-donuts-buns",
      },
    ],
  },
];

export const filterOptions = [
  {
    placeholderName: "Gender",
    queryKey: "gender",
    options: [
      {
        label: "Male",
        value: "male",
      },
      {
        label: "Female",
        value: "female",
      },
    ],
  },
  {
    placeholderName: "Select Product Type",
    queryKey: "product_type",
    options: [
      { label: "Hair Extensions", value: "hair-extensions" },
      { label: "Hair Topper", value: "hair-topper" },
      { label: "Wig", value: "wig" },
      { label: "Hair Donuts and Buns", value: "hair-donuts-buns" },
      { label: "Patch", value: "patch" },
    ],
  },
];

export const productsSearch = [
  {
    label: "Hair Extensions",
    url: "/products?product_type=hair-extensions",
  },
  {
    label: "Hair Topper",
    url: "/products?product_type=hair-topper",
  },
  { label: "Wig", url: "/products?product_type=wig" },
  {
    label: "Hair Donuts and Buns",
    url: "/products?product_type=hair-donuts-buns",
  },
  { label: "Patch", url: "/products?product_type=patch" },
];

export const whatsappLink = "https://api.whatsapp.com/send?phone=9953244606";
