import Link from "next/link";
import Menu from "./Menu";
import SearchBar from "./SearchBar";
import NavIcons from "./NavIcons";

const NavBar = () => {
  return (
    
    <div className="h-20 px-4 md:px-8 lg:px-16 xl:32 2xl:px-64 relative border-b border-gray-300 shadow-xl bg-white-500">
      <div className="h-full flex items-center justify-between md:hidden">
        {/* MOBILE */}
        <Link href="/">
          <div className="font-bold text-4xl text-center pb-4 pl-10 sm:pb-0 text-emerald-600 tracking-wide">ShopSmart</div>
        </Link>
        <Menu/>
      </div>
      {/* DESKTOP */}
      <div className="hidden md:flex items-center justify-between gap-8 h-full">
        <div className="w-1/3 xl:w-1/2 flex items-center gap-12">
          <Link href="/" className="flex items-center">
            <div className="font-bold text-4xl text-emerald-600 tracking-wide">ShopSmart</div>
          </Link>
          <div className="hidden xl:flex gap-3 font-semibold text-base">
            <Link className="navbar_link relative" href="/">HOME</Link>
            <Link className="navbar_link relative" href="/pages/product">SHOP</Link>
            <Link className="navbar_link relative" href="/pages/syd">MY PURCHASES</Link> 
          </div>
        </div>
        <div className="w-2/3 xl:w-1/2 flex items-center justify-between gap-8">
          <SearchBar/>
          <NavIcons/>
        </div>
      </div>
    </div>
  )
}

export default NavBar