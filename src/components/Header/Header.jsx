"use client";
import "../../sass/utils/_container.scss";
import "../../sass/layouts/header.scss";
import { useEffect, useState } from "react";
import MenuItems from "../MenuItems/MenuItems";
import Link from "next/link";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    if (menuOpen) {
      document.body.classList.add("body-no-scroll");
    } else {
      document.body.classList.remove("body-no-scroll");
    }

    return () => {
      document.body.classList.remove("body-no-scroll");
    };
  }, [menuOpen]);

  return (
    <header className="header">
      <div className="container">
        <div className="header__box">
          <nav className={`navigation ${menuOpen ? "open" : ""}`}>
            <MenuItems closeMenu={() => setMenuOpen(false)} />
          </nav>
          <button
            className="burger-menu"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <span className={`burger ${menuOpen ? "open" : ""}`}></span>
          </button>
          <Link
            className="navigation__link navigation__tel"
            href="tel:+380502636243"
          >
            +380502636243
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
