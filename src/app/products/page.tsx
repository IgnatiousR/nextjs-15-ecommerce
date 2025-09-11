import ProductList from "@/components/product-list";

export default async function Products({
  searchParams,
}: {
  searchParams: Promise<{ category: string }>;
}) {
  const category = (await searchParams).category;
  return (
    <div className="mt-10">
      <ProductList category={category} params="productspage" />
    </div>
  );
}
