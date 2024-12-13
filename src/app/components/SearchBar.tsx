"use client"

import { useRouter } from "next/navigation"
import { BsSearch } from "react-icons/bs"

const SearchBar = () => {
  const router = useRouter()

  const handleSearch = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const formData = new FormData(e.currentTarget)
    const name = formData.get("name") as string

    if (name) {
      router.push(`/product?name=${name}`)  // Corrected template literal syntax
    }
  }

  return (
    <form className="flex items-center  justify-between gap-4 p-2 rounded-md flex-1" onSubmit={handleSearch}>
      <input 
        type="text" 
        name="name" 
        placeholder="Search" 
        className="flex-1 bg-transparent bg-white border-2 border-gray-300 rounded-md focus:outline-none focus:border-green-600 p-2"
      />
      <button className="cursor-pointer">
        <BsSearch width={16} height={16}/>
      </button>
    </form>
  )
}

export default SearchBar
