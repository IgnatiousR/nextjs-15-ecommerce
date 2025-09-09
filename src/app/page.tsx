import ProductList from '@/components/product-list';
import Image from 'next/image';

export default function Home() {
  return (
    <div className="">
      <div className="relative aspect-[3/1] mb-10">
        <Image src="/featured.png" alt="Banner Image" fill />
      </div>
      <ProductList />
    </div>
  );
}
