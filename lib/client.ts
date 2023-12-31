import { ResponseQueryOptions } from "next-sanity";
import { sanityClient } from "./sanity";

export const client = () => {
  const options: ResponseQueryOptions = {
    cache: "no-cache",
  };
  const fetchProducts = async () => {
    const query = `*[_type=="products"]`;
    const products = await sanityClient.fetch(query, {}, options);
    return products;
  };

  const fetchProductsByGender = async (gender: "male" | "female") => {
    const query = `*[_type=="products" && gender=="${gender}"]`;
    const products = await sanityClient.fetch(query, {}, options);
    return products;
  };

  const fetchHotDealsProducts = async () => {
    const query = `*[_type=="products" && hot_deal==true]`;
    const products = await sanityClient.fetch(query, {}, options);
    return products;
  };
  const fetchProductsBySlug = async (slug: string) => {
    const query = `*[_type=="products" && slug.current=="${slug}"]`;
    const products = await sanityClient.fetch(query, {}, options);
    return products;
  };
  const fetchProductsByType = async (product_type: string) => {
    const query = `*[_type=="products" && product_type=="${product_type}"]`;
    const products = await sanityClient.fetch(query, {}, options);
    return products;
  };
  const fetchProductsByGenderAndType = async (
    product_type: string,
    gender: "male" | "female"
  ) => {
    const query = `*[_type=="products" && product_type=="${product_type}" && gender=="${gender}"]`;
    const products = await sanityClient.fetch(query, {}, options);
    return products;
  };

  return {
    fetchProducts,
    fetchProductsByGender,
    fetchHotDealsProducts,
    fetchProductsBySlug,
    fetchProductsByType,
    fetchProductsByGenderAndType,
  };
};
