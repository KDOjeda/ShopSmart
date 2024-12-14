'use client'

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { BsSearch } from 'react-icons/bs';

const SearchBar = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const router = useRouter();

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchTerm.trim()) {
      router.push(`/product_list?search=${searchTerm}`);
    } else {
      router.push('/product_list'); // Redirect to all products if searchTerm is empty
    }
    setSearchTerm(''); // Clear the input field
  };

  return (
    <form onSubmit={handleSearch} className="flex items-center justify-between gap-4 p-2 rounded-md flex-1">
      <input
        type="text"
        placeholder="Search for products..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="flex-1 bg-transparent bg-white border-2 border-gray-300 rounded-md focus:outline-none focus:border-green-600 p-2"
      />
      <button type="submit" className="cursor-pointer">
        <BsSearch width={16} height={16} />
      </button>
    </form>
  );
};

export default SearchBar;
