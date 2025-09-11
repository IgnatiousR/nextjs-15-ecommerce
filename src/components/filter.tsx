"use client";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectTrigger, SelectValue } from "./ui/select";
import { useState } from "react";

const Filter = () => {
  const searchParams = useSearchParams();
  const router = useRouter();
  const pathname = usePathname();
  const currentSort = searchParams.get("sort") || "newest";
  const [sort, setSort] = useState(currentSort);

  const handleFilter = (value: string) => {
    setSort(value);
    const params = new URLSearchParams(searchParams);
    params.set("sort", value);
    router.push(`${pathname}?${params.toString()}`, { scroll: false });
  };
  // const handleFilter = (value: string) => {
  //   const params = new URLSearchParams(searchParams);
  //   params.set("sort", value);
  //   router.push(`${pathname}?${params.toString()}`, { scroll: false });
  // };

  return (
    <div className="flex items-center justify-end gap-2 text-sm text-neutral-500 my-6">
      <span>Sort by:</span>
      {/* <select
        name="sort"
        id="sort"
        className="ring-1 ring-gray-200 shadow-md p-1 rounded-sm"
        onChange={(e) => handleFilter(e.target.value)}
      >
        <option value="newest">Newest</option>
        <option value="oldest">Oldest</option>
        <option value="asc">Price: Low to High</option>
        <option value="desc">Price: High to Low</option>
      </select> */}

      <Select value={sort} onValueChange={handleFilter}>
        <SelectTrigger className=" shadow-md px-2 py-1 rounded-sm w-[160px] cursor-pointer">
          <SelectValue />
        </SelectTrigger>
        <SelectContent>
          <SelectGroup>
            <SelectLabel>Ordering</SelectLabel>
            <SelectItem value="newest">Newest</SelectItem>
            <SelectItem value="oldest">Oldest</SelectItem>
            <SelectItem value="asc">Price: Low to High</SelectItem>
            <SelectItem value="desc">Price: High to Low</SelectItem>
          </SelectGroup>
        </SelectContent>
      </Select>
    </div>
  );
};

export default Filter;
