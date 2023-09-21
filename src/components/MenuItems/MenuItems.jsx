import Link from "next/link";

import "../../sass/utils/_container.scss";
import "../../sass/layouts/header.scss";
import { usePathname } from "next/navigation";
const MenuItems = ({ closeMenu }) => {
  const pathname = usePathname();

  return (
    <>
      <Link
        onClick={closeMenu}
        href="/"
        className={`navigation__link ${pathname === "/" ? "active" : ""}`}
      >
        Головна
      </Link>
      <Link
        onClick={closeMenu}
        href="/about"
        className={`navigation__link ${pathname === "/about" ? "active" : ""}`}
      >
        Про нас
      </Link>
      <Link
        onClick={closeMenu}
        href="/gallery"
        className={`navigation__link ${
          pathname === "/gallery" ? "active" : ""
        }`}
      >
        Каталог продукції
      </Link>
    </>
  );
};
export default MenuItems;
