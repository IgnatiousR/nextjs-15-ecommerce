import ProductList from "@/components/product-list";
import Image from "next/image";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

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
      <Carousel
        className="mb-10"
        opts={{
          loop: true,
        }}
      >
        <CarouselContent>
          <CarouselItem>
            <div className="relative aspect-[3/1]">
              <Image src="/featured.png" alt="Banner 1" fill className="object-cover rounded-xl" />
            </div>
          </CarouselItem>
          <CarouselItem>
            <div className="relative aspect-[3/1]">
              <Image
                src="/featured-0.png"
                alt="Banner 2"
                fill
                className="object-cover rounded-xl"
              />
            </div>
          </CarouselItem>
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
      <ProductList category={category} params="homepage" />
    </div>
  );
}
