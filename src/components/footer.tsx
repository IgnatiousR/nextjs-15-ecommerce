import { Copyright } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <div className="mt-26 flex flex-col items-center gap-8 md:gap-0 md:flex-row md:items-start md:justify-between dark:bg-neutral-200 bg-neutral-800 text-white dark:text-black p-8 rounded-lg">
      <div className="flex flex-col gap-2 items-center md:items-start">
        <Link href="/" className="flex items-center">
          <Image src="/logo.png" alt="Logo" width={36} height={36}></Image>
          <p className="hidden md:block text-md font-semibold  uppercase">Nxt Store</p>
        </Link>
        <p className="flex items-center text-sm text-neutral-400">
          <Copyright className="w-4 h-4" /> &nbsp; {currentYear} NXT STORE
        </p>
        <p className="text-sm text-neutral-400">All right reserved.</p>
      </div>

      <div className="flex flex-col gap-2 items-center md:items-start text-neutral-400">
        <p className="text-sm text-amber-100">Links</p>
        <Link href="/">Homepage</Link>
        <Link href="/">Contact</Link>
        <Link href="/">Terms of Service</Link>
        <Link href="/">Privacy Policy</Link>
      </div>

      <div className="flex flex-col gap-2 items-center md:items-start  text-neutral-400">
        <p className="text-sm text-amber-100">Links</p>
        <Link href="/">All Products</Link>
        <Link href="/">New Arrivals</Link>
        <Link href="/">Best Sellers</Link>
        <Link href="/">Sale</Link>
      </div>

      <div className="flex flex-col gap-2 items-center md:items-start text-neutral-400">
        <p className="text-sm text-amber-100">Links</p>
        <Link href="/">About</Link>
        <Link href="/">Contact</Link>
        <Link href="/">Blog</Link>
        <Link href="/">Affiliate Program</Link>
      </div>
    </div>
  );
};

export default Footer;
