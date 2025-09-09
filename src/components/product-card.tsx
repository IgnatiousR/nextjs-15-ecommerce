"use client";

import Link from "next/link";
import { Color, ProductType } from "../../types";
import Image from "next/image";
import { useEffect, useState } from "react";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";

const ProductCard = ({ product }: { product: ProductType }) => {
  const [productTypes, setProductTypes] = useState({
    size: product.sizes[0],
    color: product.colors[0],
  });
  const [selectedSize, setSelectedSize] = useState<string>("");

  // Auto-select the first size on mount
  useEffect(() => {
    if (product.sizes.length > 0) {
      setSelectedSize(product.sizes[0]);
    }
  }, [product.sizes]);

  return (
    <div className="shadow-lg rounded-lg overflow-hidden bg-white dark:bg-black">
      {/* Image */}
      <Link href={`/products/${product.id}`}>
        <div className="relative aspect-[2/3]">
          <Image
            src={product.images[product.colors[0].name]}
            alt={product.name}
            fill
            className="object-cover hover:scale-105 transition-all duration-300"
          />
        </div>
      </Link>

      {/* PRODUCT DETAIL */}
      <div className="flex flex-col gap-4 p-4">
        <h1 className="font-medium">{product.name}</h1>
        <p className="text-sm text-gray-500">{product.shortDescription}</p>
        {/* PRODUCT TYPES */}
        <div className="flex items-center gap-4 text-xs">
          {/* SIZES */}
          <div className="flex flex-col gap-1">
            <span className="text-gray-500">Size</span>
            <select
              name="size"
              id="size"
              className="ring ring-gray-300 rounded-md px-2 py-1"
              // onChange={(e) =>
              //   handleProductType({ type: "size", value: e.target.value })
              // }
            >
              {product.sizes.map((size) => (
                <option key={size} value={size}>
                  {size.toUpperCase()}
                </option>
              ))}
            </select>
          </div>
          <div className="flex flex-col gap-1 text-xs">
            <Label className="text-xs">Size</Label>
            <Select value={selectedSize} onValueChange={setSelectedSize}>
              <SelectTrigger className="px-2 py-1">
                <SelectValue placeholder="S" />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  <SelectLabel>Size</SelectLabel>
                  {product.sizes.map((size) => (
                    <SelectItem key={size} value={size}>
                      {size.toUpperCase()}
                    </SelectItem>
                  ))}
                </SelectGroup>
              </SelectContent>
            </Select>
          </div>

          {/* COLORS */}
          {/* <RadioGroup defaultValue="comfortable" className="space-y-3">
            <div className="flex items-center gap-3">
              <RadioGroupItem
                value="default"
                id="r1"
                className="data-[state=checked]:bg-blue-500 data-[state=checked]:border-blue-500"
              />
              <Label htmlFor="r1">Default</Label>
            </div>

            <div className="flex items-center gap-3">
              <RadioGroupItem
                value="comfortable"
                id="r2"
                className="data-[state=checked]:bg-green-500 data-[state=checked]:border-green-500"
              />
              <Label htmlFor="r2">Comfortable</Label>
            </div>

            <div className="flex items-center gap-3">
              <RadioGroupItem
                value="compact"
                id="r3"
                className="data-[state=checked]:bg-red-500 data-[state=checked]:border-red-500"
              />
              <Label htmlFor="r3">Compact</Label>
            </div>
          </RadioGroup> */}
          <div className="flex flex-col gap-1">
            <span className="text-gray-500">Color</span>
            <div className="flex items-center gap-2">
              {product.colors.map((color: Color) => (
                <div
                  className={`cursor-pointer border-1 ${
                    productTypes.color.name === color.name ? "border-gray-400" : "border-gray-200"
                  } rounded-full p-[1.2px]`}
                  key={color.name}
                  // onClick={() =>
                  //   handleProductType({ type: "color", value: color })
                  // }
                >
                  <div className="w-[14px] h-[14px] rounded-full" style={{ backgroundColor: color.hex }} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
