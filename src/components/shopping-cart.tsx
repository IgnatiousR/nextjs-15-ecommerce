"use client";

// import useCartStore from "@/stores/cartStore";
import { ShoppingCartIcon } from "lucide-react";
import Link from "next/link";

const ShoppingCart = () => {
  // const { cart, hasHydrated } = useCartStore();

  // if (!hasHydrated) return null;
  return (
    <Link href="/cart" className="relative">
      <ShoppingCartIcon className="w-4 h-4 " />
      <span
        className="absolute -top-3 -right-3 bg-amber-400  
      rounded-full w-4 h-4 flex items-center justify-center text-xs font-medium"
      >
        {/* {cart.reduce((acc, item) => acc + item.quantity, 0)} */}0
      </span>
    </Link>
  );
};

export default ShoppingCart;
