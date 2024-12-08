import Link from "next/link";
import Menu from "./Menu";
import SearchBar from "./SearchBar";
import NavIcons from "./NavIcons";
import styles from "./navbar.module.css";

const NavBar = () => {
  return (
    <div className={styles.navbar}>
        <div className="h-20 px-2 md:px-4 lg:px-8 xl:px-16 2xl:px-32 relative border-b border-gray-300 shadow-xl ">
      <div className="h-full flex items-center justify-between md:hidden">
        {/* MOBILE */}
        <Link href="/">
          <div className="font-bold text-4xl text-center pb-4 pl-10 sm:pb-0 text-blue-800 tracking-wide text-shadow-logo">
            ShopSmart
          </div>
        </Link>
        <Menu />
      </div>
      {/* DESKTOP */}
      <div className="  hidden md:flex items-center justify-between gap-8 h-full">
        <div className="w-1/3 xl:w-1/2 flex items-center gap-12">
          <Link href="/" className="flex items-center">
            <div className="font-bold text-4xl text-blue-800 tracking-wide text-shadow-logo">
              ShopSmart
            </div>
          </Link>
          <div className="hidden xl:flex gap-3 font-semibold text-base">
            <Link className="navbar_link relative" href="/">HOME</Link>
            <Link className="navbar_link relative" href="/pages/product">SHOP</Link>
            <Link className="navbar_link relative" href="/pages/syd">MY PURCHASES</Link> 
          </div>
        </div>
        <div className="w-2/3 xl:w-1/2 flex items-center justify-between gap-8">
          <SearchBar />
          <NavIcons />
        </div>
      </div>
    </div>
    </div>
    
  );
};

export default NavBar;
