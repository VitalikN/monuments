"use client";

import "../../sass/utils/_container.scss";
import "../../sass/layouts/footer.scss";
import Link from "next/link";
import MenuItems from "../MenuItems/MenuItems";

import { usePathname } from "next/navigation";

const Footer = () => {
  const pathname = usePathname();

  return (
    <footer
      className={`footer__section  ${pathname === "/" ? "home" : "other"}`}
    >
      <div className="container">
        <div className="footer__container">
          <address className="footer__address">
            <h2 className="footer__title">Контакти</h2>
            <Link className="footer__link footer__tel" href="tel:+380502636243">
              +380502636243
            </Link>

            <Link
              className="footer__link"
              href="https://www.google.com/maps/place/%D0%BF%D0%BB%D0%BE%D1%89%D0%B0+%D0%9A%D0%B8%D1%80%D0%B8%D0%BB%D0%B0+%D1%96+%D0%9C%D0%B5%D1%84%D0%BE%D0%B4%D1%96%D1%8F,+10,+%D0%9C%D1%83%D0%BA%D0%B0%D1%87%D0%B5%D0%B2%D0%BE,+%D0%97%D0%B0%D0%BA%D0%B0%D1%80%D0%BF%D0%B0%D1%82%D1%81%D1%8C%D0%BA%D0%B0+%D0%BE%D0%B1%D0%BB%D0%B0%D1%81%D1%82%D1%8C,+89600"
              target="_blank"
            >
              Адреса: м. Мукачево, пл. Кирила і Мефодія, 10-12
            </Link>
          </address>
          <div className="footer__nav">
            <MenuItems />
          </div>
        </div>
      </div>
    </footer>
  );
};
export default Footer;
