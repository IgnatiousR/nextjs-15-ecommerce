import Image from 'next/image';
import Link from 'next/link';
import { ModeToggle } from './mode-toggle';
import SearchBar from './search-bar';
import { Bell, Home, ShoppingCart } from 'lucide-react';

const NavBar = () => {
  return (
    <nav className="sticky top-0 z-50 w-full flex items-center justify-between bg-neutral-100 dark:bg-neutral-800 border-b border-neutral-300 dark:border-neutral-600 py-4 px-6">
      {/* Left */}
      <Link href="/" className="flex items-center">
        <Image src="/logo.png" alt="Logo" width={36} height={36} className="w-6 h-6 md:w-9 md:h-9"></Image>
        <p className="hidden md:block text-md font-semibold  uppercase">Nxt Store</p>
      </Link>

      {/* Right */}
      <div className="flex gap-6 items-center">
        <SearchBar />
        <Link href="/">
          <Home className="w-4 h-4" />
        </Link>
        <Bell className="w-4 h-4" />
        <ShoppingCart className="w-4 h-4" />
        <ModeToggle />
        <Link href="login">Sign in</Link>
      </div>
    </nav>
  );
};

export default NavBar;
