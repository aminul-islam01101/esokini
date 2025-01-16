import Link from "next/link";
import NavLink from "../buttons/NavLink";
import Image from "next/image";
import logo from "../../../public/assets/Logo-Mockup-(Black).png";

const Navbar = () => {
  return (
    <nav className="bg-white shadow-md fixed w-full z-10">
      <div className="py-4 container">
        <div className="flex items-center justify-between h-16">
          <div className="flex-shrink-0">
            <Link href="/">
              <Image src={logo} width={110} height={100} alt="logo" />
            </Link>
           
          </div>
          <div className="hidden lg:flex space-x-4">
            <Link href="/shop" className="text-black font-extrabold uppercase hover:transition-colors hover:text-blue-500">
              Shop
            </Link>
            <Link href="/about" className="text-black font-extrabold uppercase hover:transition-colors hover:text-blue-500">
              About
            </Link>
            <Link href="/contact" className="text-black font-extrabold uppercase hover:transition-colors hover:text-blue-500">
              Contact
            </Link>
          </div>
          {/* Hamburger menu */}
          <div className="lg:hidden">
            <input
              type="checkbox"
              id="menu-toggle"
              className="hidden peer"
              aria-hidden="true"
            />
            <label
              htmlFor="menu-toggle"
              className="text-black font-extrabold uppercase hover:transition-all focus:outline-none peer-checked:text-blue-500"
              aria-label="Toggle Menu"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </label>
            <div
              className="peer-checked:transform peer-checked:translate-x-0 
                         fixed top-0 left-0 w-64 h-full bg-white shadow-lg z-20
                         transform -translate-x-full transition-transform duration-300 ease-in-out"
            >
              <div className="p-4">
                <div>

                  <label
                  htmlFor="menu-toggle"
                  className="text-black font-extrabold uppercase hover:transition-all focus:outline-none mb-4 flex justify-end "
                  aria-label="Close Menu"
                >
                  <svg
                    className="w-6 h-6"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={2}
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </label>
                </div>
                <nav className="space-y-4">
                  <NavLink href="/shop" label="Shop" />
                  <NavLink href="/about" label="About" />
                  <NavLink href="/contact" label="Contact" />
                </nav>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
