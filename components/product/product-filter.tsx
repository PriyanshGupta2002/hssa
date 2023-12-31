"use client";
import React, { useCallback, useEffect, useMemo, useState } from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select";
import { usePathname, useRouter, useSearchParams } from "next/navigation";

interface ProductFilterProps {
  placeholder: string;
  options: {
    label: string;
    value: string;
  }[];
  queryKey: string;
}

const ProductFilter: React.FC<ProductFilterProps> = ({
  placeholder,
  options,
  queryKey,
}) => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const pathName = usePathname();
  const [value, setValue] = useState("");
  useEffect(() => {
    if (searchParams.size < 1) {
      setValue("");
    }
  }, [searchParams.size]);

  const createQueryString = useCallback(
    (name: string, value: string) => {
      const params = new URLSearchParams(searchParams);
      if (!params.get(name)) {
        params.append(name, value);
      } else {
        params.set(name, value);
      }

      return params.toString();
    },
    [searchParams]
  );

  const handleChange = (value: string) => {
    setValue(value);
    const newQueryString = createQueryString(queryKey, value);
    router.push(`${pathName}?${newQueryString}`);
  };

  const selectItems = useMemo(
    () =>
      options.map((item, idx) => (
        <SelectItem key={idx} value={item.value}>
          {item.label}
        </SelectItem>
      )),
    [options]
  );

  return (
    <Select onValueChange={handleChange} value={value}>
      <SelectTrigger className="w-[180px]">
        <SelectValue placeholder={placeholder} />
      </SelectTrigger>
      <SelectContent>{selectItems}</SelectContent>
    </Select>
  );
};

export default ProductFilter;
