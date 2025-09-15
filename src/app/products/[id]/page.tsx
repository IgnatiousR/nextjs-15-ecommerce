// import ProductInteraction from "@/components/ProductInteraction";

import Image from "next/image";
import { ProductType } from "../../../../types";
import { products } from "@/data/products-data";
import ProductInteraction from "@/components/product-interaction";

export const generateMetadata = async ({ params }: { params: { id: string } }) => {
  // TODO:get the product from db
  const id = params.id;
  const product = products.find((p) => p.id === parseInt(id)) as ProductType;
  // TEMPORARY
  return {
    title: product.name,
    describe: product.description,
  };
};

const ProductPage = async ({
  params,
  searchParams,
}: {
  // params: Promise<{ id: string }>;
  // searchParams: Promise<{ color: string; size: string }>;
  params: { id: string };
  searchParams: { color: string; size: string };
}) => {
  const { size, color } = searchParams;
  // const id = (await params).id;
  const product = products.find((p) => p.id === parseInt(params.id)) as ProductType;
  // const product = products.find((p) => p.id === parseInt(id)) as ProductType;

  const selectedSize = size || (product.sizes[0] as string);
  const selectedColor = color || (product.colors[0].name as string);
  return (
    <div className="flex flex-col gap-4 lg:flex-row md:gap-12 mt-12">
      {/* IMAGE */}
      <div className="w-full lg:w-5/12 relative aspect-[2/3]">
        <Image src={product.images[selectedColor]} alt={product.name} fill className="object-contain rounded-md" />
      </div>
      {/* DETAILS */}
      <div className="w-full lg:w-7/12 flex flex-col gap-4">
        <h1 className="text-2xl font-medium">{product.name}</h1>
        <p className="text-neutral-500">{product.description}</p>
        <h2 className="text-2xl font-semibold">${product.price.toFixed(2)}</h2>
        <ProductInteraction product={product} selectedSize={selectedSize} selectedColor={selectedColor} />
        {/* CARD INFO */}
        <div className="flex items-center gap-2 mt-4">
          <Image src="/klarna.png" alt="klarna" width={50} height={25} className="rounded-md" />
          <Image src="/cards.png" alt="cards" width={50} height={25} className="rounded-md" />
          <Image src="/stripe.png" alt="stripe" width={50} height={25} className="rounded-md" />
        </div>
        <p className="text-neutral-500 text-xs">
          By clicking Pay Now, you agree to our <span className="underline hover:text-black">Terms & Conditions</span>{" "}
          and <span className="underline hover:text-black">Privacy Policy</span>. You authorize us to charge your
          selected payment method for the total amount shown. All sales are subject to our return and{" "}
          <span className="underline hover:text-black">Refund Policies</span>.
        </p>
      </div>
    </div>
  );
};

export default ProductPage;
