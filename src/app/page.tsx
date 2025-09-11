import ProductList from "@/components/product-list";
import Image from "next/image";

export default async function HomePage({
  searchParams,
}: {
  searchParams: Promise<{ category: string }>;
}) {
  const category = (await searchParams).category;
  return (
    <div className="">
      <div className="relative aspect-[3/1] mb-10">
        <Image src="/featured.png" alt="Banner Image" fill />
      </div>
      <ProductList category={category} params="homepage" />
    </div>
  );
}
