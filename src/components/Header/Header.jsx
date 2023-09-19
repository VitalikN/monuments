"use client";
import "../../sass/utils/_container.scss";
import "../../sass/layouts/header.scss";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import MenuItems from "../MenuItems/MenuItems";

const Header = () => {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="header">
      <div className="container">
        <nav className={`navigation ${menuOpen ? "open" : ""}`}>
          {" "}
          <MenuItems closeMenu={() => setMenuOpen(false)} />
        </nav>

        <button className="burger-menu" onClick={() => setMenuOpen(!menuOpen)}>
          <span className={`burger ${menuOpen ? "open" : ""}`}></span>
        </button>
      </div>
    </header>
  );
};

export default Header;
