import Image from "next/image";
import { ProductType } from "../../../../types";
import { products } from "@/data/products-data";
import ProductInteraction from "@/components/product-interaction";

export const metadataBase = new URL("http://localhost:3000");
export const generateMetadata = async ({ params }: { params: Promise<{ slug: string }> }) => {
  //Get from db
  const { slug } = await params;
  const product = products.find((p) => p.slug === slug) as ProductType;
  const title = product.name;
  // const description = product.description.slice(0, 160);
  const description = product.shortDescription;
  // const url = `http://localhost:3000/product/${slug}`;
  const image = product.images[Object.keys(product.images)[0]];

  return {
    title,
    description,
    // openGraph: {
    //   title,
    //   description,
    //   url: `/product/${slug}`,
    //   type: "article",
    //   images: [
    //     {
    //       url: image,
    //       width: 600,
    //       height: 600,
    //     },
    //   ],
    // },
  };
};

const ProductPage = async ({
  params,
  searchParams,
}: {
  params: Promise<{ slug: string }>;
  searchParams: Promise<{ color: string; size: string }>;
}) => {
  const { size, color } = await searchParams;
  const slug = (await params).slug;
  const product = products.find((p) => p.slug === slug) as ProductType;

  const selectedSize = size || (product.sizes[0] as string);
  const selectedColor = color || (product.colors[0].name as string);
  return (
    <div className="flex flex-col gap-4 lg:flex-row md:gap-12 mt-12">
      {/* IMAGE */}
      <div className="w-full lg:w-5/12 relative aspect-[2/3]">
        <Image
          src={product.images[selectedColor]}
          alt={product.name}
          fill
          className="object-contain rounded-md"
        />
      </div>
      {/* DETAILS */}
      <div className="w-full lg:w-7/12 flex flex-col gap-4">
        <h1 className="text-2xl font-medium">{product.name}</h1>
        <p className="text-neutral-500">{product.description}</p>
        <h2 className="text-2xl font-semibold">${product.price.toFixed(2)}</h2>
        <ProductInteraction
          product={product}
          selectedSize={selectedSize}
          selectedColor={selectedColor}
        />
        {/* CARD INFO */}
        <div className="flex items-center gap-2 mt-4">
          <Image src="/klarna.png" alt="klarna" width={50} height={25} className="rounded-md" />
          <Image src="/cards.png" alt="cards" width={50} height={25} className="rounded-md" />
          <Image src="/stripe.png" alt="stripe" width={50} height={25} className="rounded-md" />
        </div>
        <p className="text-neutral-500 text-xs">
          By clicking Pay Now, you agree to our{" "}
          <span className="underline hover:text-black">Terms & Conditions</span> and{" "}
          <span className="underline hover:text-black">Privacy Policy</span>. You authorize us to
          charge your selected payment method for the total amount shown. All sales are subject to
          our return and <span className="underline hover:text-black">Refund Policies</span>.
        </p>
      </div>
    </div>
  );
};

export default ProductPage;
