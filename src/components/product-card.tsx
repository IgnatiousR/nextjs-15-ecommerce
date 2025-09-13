"use client";

import Link from "next/link";
import { Color, ProductType } from "../../types";
import Image from "next/image";
import { useState } from "react";
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
import { ShoppingCartIcon } from "lucide-react";
import useCartStore from "@/stores/cartStore";
import { toast } from "sonner";

const ProductCard = ({ product }: { product: ProductType }) => {
  const [productTypes, setProductTypes] = useState({
    size: product.sizes[0],
    color: product.colors[0].name,
  });
  const { addToCart } = useCartStore();
  // const [selectedSize, setSelectedSize] = useState<string>("");

  // // Auto-select the first size on mount
  // useEffect(() => {
  //   if (product.sizes.length > 0) {
  //     setSelectedSize(product.sizes[0]);
  //   }
  // }, [product.sizes]);

  const handleProductType = ({ type, value }: { type: "color" | "size"; value: string }) => {
    setProductTypes((prev) => ({
      ...prev,
      [type]: value,
    }));
  };
  const handleAddToCart = () => {
    addToCart({
      ...product,
      quantity: 1,
      selectedSize: productTypes.size,
      selectedColor: productTypes.color,
    });
    toast.success("Product added to cart");
  };

  return (
    <div className="shadow-lg rounded-lg overflow-hidden bg-white dark:bg-black">
      {/* Image */}
      <Link href={`/products/${product.id}`}>
        <div className="relative aspect-[2/3]">
          <Image
            src={product.images[productTypes.color]}
            alt={product.name}
            fill
            className="object-cover hover:scale-105 transition-all duration-300"
          />
        </div>
      </Link>

      {/* PRODUCT DETAIL */}
      <div className="flex flex-col gap-4 p-4">
        <Link href={`/products/${product.id}`}>
          <h1 className="font-medium">{product.name}</h1>
        </Link>
        <p className="text-sm text-gray-500">{product.shortDescription}</p>
        {/* PRODUCT TYPES */}
        <div className="flex items-center gap-4 text-xs">
          {/* SIZES */}
          <div className="flex flex-col gap-1 text-xs">
            <Label className="text-xs">Size</Label>
            <Select
              value={productTypes.size}
              onValueChange={(value) => handleProductType({ type: "size", value })}
            >
              <SelectTrigger className="py-1">
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
          <div className="flex flex-col gap-1">
            <span className="text-neutral-500">Color</span>
            <div className="flex items-center gap-2">
              {product.colors.map((color: Color) => (
                <div
                  className={`cursor-pointer border-1 ${
                    productTypes.color === color.name
                      ? "border-neutral-400 dark:border-neutral-200"
                      : "border-neutral-200 dark:border-neutral-600"
                  } rounded-full p-0.5`}
                  key={color.name}
                  onClick={() => handleProductType({ type: "color", value: color.name })}
                >
                  <div
                    className="w-[14px] h-[14px] rounded-full"
                    style={{ backgroundColor: color.hex }}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Price and add to cart button */}
        <div className="flex items-center justify-between">
          <p className="font-medium">${product.price.toFixed(2)}</p>
          <button
            // onClick={handleAddToCart}
            className="ring-1 ring-neutral-200 dark:ring-neutral-800 shadow-lg rounded-md px-2 py-1 text-sm cursor-pointer 
            hover:dark:text-black hover:dark:bg-white hover:text-white hover:bg-black 
            transition-all duration-300 flex items-center gap-2"
          >
            <ShoppingCartIcon className="w-4 h-4" />
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
