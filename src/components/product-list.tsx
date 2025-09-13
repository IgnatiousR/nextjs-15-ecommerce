import Link from "next/link";
import Categories from "./categories";
import ProductCard from "./product-card";
import Filter from "./filter";
import { products } from "@/data/products-data";

const ProductList = ({
  category,
  params,
}: {
  category: string;
  params: "homepage" | "productspage";
}) => {
  return (
    <div className="w-full">
      <Categories />
      {params === "productspage" && <Filter />}
      <div className="grid grid-cols-2 sm:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-4 gap-12">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
      <Link
        href={category ? `/products/?category=${category}` : "/products"}
        className="flex justify-end mt-6 underline text-sm text-neutral-500"
      >
        View all products
      </Link>
    </div>
  );
};

export default ProductList;
