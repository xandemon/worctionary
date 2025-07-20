import { Search } from "lucide-react";
import { useCallback, useState } from "react";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { Input } from "./ui/input";

interface HeaderSearchProps {
  placeholder?: string;
  onSearch?: (search: string) => void;
}

function HeaderSearch({ placeholder = "Search", onSearch }: HeaderSearchProps) {
  const [searchValue, setSearchValue] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchValue.trim() && onSearch) {
      onSearch(searchValue.trim());
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="relative text-[#9eabb8]"
      role="search"
      aria-label="Header search"
    >
      <Search
        className="absolute left-4 top-1/2 transform -translate-y-1/2"
        size={24}
        aria-hidden="true"
      />
      <Input
        type="search"
        value={searchValue}
        onChange={(e) => setSearchValue(e.target.value)}
        placeholder={placeholder}
        className="pl-12 pr-4 bg-[#293038] border-gray-700 focus:ring-1 md:text-base focus:ring-blue-500 rounded-[12px] w-34 lg:w-40 h-10 text-[#9eabb8] placeholder:text-[#9eabb8]"
        aria-label="Search in header"
      />
    </form>
  );
}

export function Header() {
  const handleHeaderSearch = useCallback((search: string) => {
    console.log(`Header search: ${search}`);
  }, []);

  return (
    <header className="flex items-center justify-between px-4 lg:px-10 py-3 bg-[#121417] border-b border-[#9EABB8] w-full">
      <div className="flex items-center gap-2 md:gap-4">
        <img
          src="/task1/logo.png"
          alt="Wortionary logo"
          width={16}
          height={16}
        />
        <h1 className="text-white font-bold text-lg">Worctionary</h1>
      </div>

      <div className="flex items-center gap-3 lg:gap-8">
        <HeaderSearch placeholder="Search" onSearch={handleHeaderSearch} />
        <Avatar className="w-10 h-10">
          <AvatarImage src="/avatar.png" alt="User avatar" />
          <AvatarFallback className="bg-gray-700 text-white">U</AvatarFallback>
        </Avatar>
      </div>
    </header>
  );
}
