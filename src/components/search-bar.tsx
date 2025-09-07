import { Search } from 'lucide-react';

const SearchBar = () => {
  return (
    <div className="flex hidden sm:flex items-center gap-2 rounded-md ring-1 ring-gray-200 px-2 py-1 shadow-sm">
      <Search className="w- h-4 text-gray-500" />
      <input id="search" placeholder="Search..." className="outline-0 text-sm" />
      {/* <Input placeholder="Search..." className="border-none shadow-none focus:outline-none focus:ring-0 " /> */}
    </div>
  );
};

export default SearchBar;
