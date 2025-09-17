"use client";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Image from "next/image";
import Autoplay from "embla-carousel-autoplay";
import { useRef, useState, useEffect } from "react";
import type { EmblaCarouselType } from "embla-carousel";

const Banner = () => {
  const autoplay = useRef(
    Autoplay({
      delay: 2500,
      stopOnInteraction: false,
    })
  );

  const [api, setApi] = useState<EmblaCarouselType | undefined>(undefined);
  const [current, setCurrent] = useState(0);
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!api) return;

    setCount(api.scrollSnapList().length);
    setCurrent(api.selectedScrollSnap());

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap());
    });
  }, [api]);

  return (
    <div>
      <Carousel
        className="mb-4"
        opts={{ loop: true }}
        plugins={[autoplay.current]}
        onMouseEnter={autoplay.current.stop}
        onMouseLeave={autoplay.current.reset}
        setApi={setApi} // ✅ type-safe now
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

      {/* Pagination Dots */}
      <div className="flex justify-center gap-2 mt-2 mb-4">
        {Array.from({ length: count }).map((_, i) => (
          <button
            key={i}
            onClick={() => api?.scrollTo(i)}
            className={`h-2 w-2 rounded-full transition-all ${
              current === i ? "bg-neutral-700 w-4" : "bg-neutral-400"
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default Banner;
