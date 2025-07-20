import { Search } from "lucide-react";
import { useCallback, useEffect, useState } from "react";
import { Input } from "./ui/input";
import { Button } from "./ui/button";

interface SearchInputProps {
  initialValue: string;
  onSearch: (search: string) => void;
  placeholder?: string;
  className?: string;
}

export function HeroSection() {
  const handleSearch = useCallback((search: string) => {
    console.log(`Main search: ${search}`);
  }, []);

  return (
    <section className="relative w-full max-w-5xl mx-auto rounded-xl overflow-hidden mt-8 p-4">
      <img
        src="/task1/hero-bg.png"
        alt="Geometric background pattern"
        className="w-full min-h-[480px] object-cover"
      />
      <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-8 md:px-15">
        <h1 className="text-3xl md:text-5xl font-extrabold md:font-black leading-10 md:leading-[60px] tracking-[-2px] text-white mb-6">
          Search for words, phrases and meanings
        </h1>
        <SearchInput
          initialValue=""
          onSearch={handleSearch}
          placeholder="Type to search..."
          className="w-full max-w-[480px]"
        />
      </div>
    </section>
  );
}

function SearchInput({
  initialValue,
  onSearch,
  placeholder = "Type to search...",
  className = "",
}: SearchInputProps) {
  const [inputValue, setInputValue] = useState(initialValue);

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      if (inputValue.trim()) {
        onSearch(inputValue.trim());
      }
    }, 300);

    return () => clearTimeout(timeoutId);
  }, [inputValue, onSearch]);

  useEffect(() => {
    setInputValue(initialValue);
  }, [initialValue]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (inputValue.trim()) {
      onSearch(inputValue.trim());
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className={`flex items-center bg-[#1c2126] pl-[15px] pr-[7px] py-3 rounded-[12px] shadow-lg h-16 text-[#9eabb8] ${className}`}
      role="search"
      aria-label="Main search form"
    >
      <Search className="flex-shrink-0" size={20} aria-hidden="true" />
      <Input
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        type="search"
        placeholder={placeholder}
        className="flex-1 bg-transparent p-2 border-none placeholder:text-gray-400 focus:ring-0 focus:outline-none md:text-base focus-visible:ring-0"
        aria-label={placeholder}
      />
      <Button
        type="submit"
        className="bg-[#1a80e5] hover:bg-blue-700 text-white ml-4 px-6 transition-colors duration-200 text-[16px] font-bold rounded-[12px] h-12 w-[96px]"
        aria-label="Search"
      >
        Search
      </Button>
    </form>
  );
}
