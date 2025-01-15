"use client";
import Link from "next/link";
import React from "react";

interface NavLinkProps {
  href: string;
  label: string;
}

const NavLink: React.FC<NavLinkProps> = ({ href, label }) => {
  const handleClick = () => {
    const menuToggle = document.getElementById(
      "menu-toggle"
    ) as HTMLInputElement;
    if (menuToggle) {
      menuToggle.checked = false;
    }
  };

  return (
    <Link
      href={href}
      className="block text-black hover:text-blue-500 font-extrabold uppercase"
      onClick={handleClick}
    >
      {label}
    </Link>
  );
};

export default NavLink;
