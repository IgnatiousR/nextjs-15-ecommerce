import Banner from "@/components/banner";
import ProductList from "@/components/product-list";

export default async function HomePage({
  searchParams,
}: {
  searchParams: Promise<{ category: string }>;
}) {
  const category = (await searchParams).category;
  return (
    <div className="">
      {/* <div className="relative aspect-[3/1] mb-10">
        <Image src="/featured.png" alt="Banner Image" fill />
      </div> */}
      <Banner />
      <ProductList category={category} params="homepage" />
    </div>
  );
}
