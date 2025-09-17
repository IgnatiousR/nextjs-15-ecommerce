"use client";

import useCartStore from "@/stores/cartStore";
import { Color, ProductType } from "../../types";
import { Minus, Plus, ShoppingCart } from "lucide-react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useState } from "react";
import { toast } from "sonner";
import { Button } from "./ui/button";

import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";

const colors = [
  { name: "Red", value: "red", class: "border-red-500" },
  { name: "Blue", value: "blue", class: "border-blue-500" },
  { name: "Green", value: "green", class: "border-[#10b981]" },
  { name: "Black", value: "black", class: "border-black" },
];

const ProductInteraction = ({
  product,
  selectedSize,
  selectedColor,
}: {
  product: ProductType;
  selectedSize: string;
  selectedColor: string;
}) => {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const [quantity, setQuantity] = useState(1);

  const [selected, setSelected] = useState("red");

  const { addToCart } = useCartStore();

  const handleTypeChange = (type: string, value: string) => {
    const params = new URLSearchParams(searchParams.toString());
    params.set(type, value);
    router.push(`${pathname}?${params.toString()}`, { scroll: false });
  };

  const handleQuantityChange = (type: "increment" | "decrement") => {
    if (type === "increment") {
      setQuantity((prev) => prev + 1);
    } else {
      if (quantity > 1) {
        setQuantity((prev) => prev - 1);
      }
    }
  };

  const handleAddToCart = () => {
    addToCart({
      ...product,
      quantity,
      selectedColor,
      selectedSize,
    });
    toast.success(`${product.name} added to cart`);
  };
  return (
    <div className="flex flex-col gap-4 mt-4">
      {/* SIZE */}
      <div className="flex flex-col gap-2 text-xs">
        <span className="text-neutral-500">Size</span>
        <div className="flex items-center gap-2">
          {product.sizes.map((size) => (
            <div
              className={`cursor-pointer border-1 p-1 ${
                selectedSize === size ? "border-neutral-600" : "border-neutral-300"
              }`}
              key={size}
              onClick={() => handleTypeChange("size", size)}
            >
              <div
                className={`w-6 h-6 text-center flex items-center justify-center ${
                  selectedSize === size ? "bg-black text-white" : "bg-white text-black"
                }`}
              >
                {size.toUpperCase()}
              </div>
            </div>
          ))}
        </div>
      </div>
      {/* COLOR */}
      <div className="flex flex-col gap-2 text-sm">
        <span className="text-neutral-500">Color</span>
        <div className="flex items-center gap-2">
          {product.colors.map((color: Color) => (
            <div
              className={`cursor-pointer border-1 p-1 ${
                selectedColor === color.name ? "border-neutral-300" : "border-white"
              }`}
              key={color.name}
              onClick={() => handleTypeChange("color", color.name)}
            >
              <div className={`w-6 h-6`} style={{ backgroundColor: color.name }} />
            </div>
          ))}
        </div>
      </div>
      {/* QUANTITY */}
      <div className="flex flex-col gap-2 text-sm">
        <span className="text-neutral-500">Quantity</span>
        <div className="flex items-center gap-2">
          <button
            className="cursor-pointer border-1 border-neutral-300 p-1"
            onClick={() => handleQuantityChange("decrement")}
          >
            <Minus className="w-4 h-4" />
          </button>
          <span>{quantity}</span>
          <button
            className="cursor-pointer border-1 border-neutral-300 p-1"
            onClick={() => handleQuantityChange("increment")}
          >
            <Plus className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* <RadioGroup value={selected} onValueChange={setSelected} className="flex gap-4">
        {colors.map((c) => (
          <div key={c.value} className="flex flex-col items-center">
            <RadioGroupItem
              value={c.value}
              id={c.value}
              className={`h-4 w-4 rounded-full ${c.class} 
              border-2  data-[state=checked]:ring-2 `}
            />
            <Label htmlFor={c.value} className="text-xs mt-1">
              {c.name}
            </Label>
          </div>
        ))}
      </RadioGroup> */}

      <RadioGroup defaultValue="comfortable" className="flex gap-4">
        {/* Red square */}
        <div className="flex items-center gap-2">
          <RadioGroupItem value="red" id="r1" className="peer sr-only" />
          <Label
            htmlFor="r1"
            className="h-6 w-6 bg-red-500 cursor-pointer
            ring-offset-4 ring-offset-background
            peer-data-[state=checked]:ring-2
          peer-data-[state=checked]:ring-black dark:peer-data-[state=checked]:ring-white"
          />
        </div>

        {/* Blue square */}
        <div className="flex items-center gap-2">
          <RadioGroupItem value="blue" id="r2" className="peer sr-only" />
          <Label
            htmlFor="r2"
            className="h-6 w-6 bg-blue-500 cursor-pointer
            ring-offset-4 ring-offset-background
            peer-data-[state=checked]:ring-2 peer-data-[state=checked]:ring-black dark:peer-data-[state=checked]:ring-white"
          />
        </div>

        {/* Green square */}
        <div className="flex items-center gap-2">
          <RadioGroupItem value="green" id="r3" className="peer sr-only" />
          <Label
            htmlFor="r3"
            className="h-6 w-6 bg-green-500 cursor-pointer
            ring-offset-4 ring-offset-background
            peer-data-[state=checked]:ring-2 peer-data-[state=checked]:ring-black dark:peer-data-[state=checked]:ring-white"
          />
        </div>
      </RadioGroup>
      {/* BUTTONS */}
      {/* <button
        onClick={handleAddToCart}
        className="bg-neutral-800 text-white px-4 py-2 rounded-md shadow-lg flex items-center justify-center gap-2 cursor-pointer text-sm font-medium"
      >
        <Plus className="w-4 h-4" />
        Add to Cart
      </button> */}
      <Button className="cursor-pointer" onClick={handleAddToCart}>
        <Plus className="w-4 h-4" />
        Add to Cart
      </Button>
      <Button className="shadow-lg bg-white dark:bg-black text-black dark:text-white ring-1 ring-neutral-400 dark:ring-0 cursor-pointer hover:bg-white/70 dark:hover:bg-black/70">
        <ShoppingCart className="w-4 h-4 " />
        Buy this Item
      </Button>
      {/* <button className="bg-white dark:bg-black ring-1 ring-neutral-400 dark:ring-0 shadow-lg text-neutral-800 dark:text-neutral-200 px-4 py-2 rounded-md flex items-center justify-center cursor-pointer gap-2 text-sm font-medium">
        <ShoppingCart className="w-4 h-4" />
        Buy this Item
      </button> */}
    </div>
  );
};

export default ProductInteraction;
