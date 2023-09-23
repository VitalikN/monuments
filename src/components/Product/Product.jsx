import Image from "next/image";
import "../../sass/layouts/product.scss";
import Link from "next/link";

const Product = () => {
  return (
    <section className="product__section">
      <div className="container">
        <h2 className="product__title">Продукція</h2>

        <ul className="product__list">
          <li className="product__item">
            <Link href="/catalog/single-monuments" className="product__link">
              <Image
                className="product__img"
                src="/granite-1.png"
                alt="catalog/single-monuments"
                width="350"
                height="270"
                priority={true}
              />
              <h3 className="product__text"> Одинарні </h3>
            </Link>
          </li>
          <li className="product__item">
            <Link href="/catalog/double-monuments" className="product__link">
              <Image
                className="product__img"
                src="/granite-2.png"
                alt="catalog/double-monuments"
                width="350"
                height="270"
                priority={true}
              />
              <h3 className="product__text">Подвійні</h3>
            </Link>
          </li>
          <li className="product__item">
            <Link
              href="/catalog/monument-accessories"
              className="product__link"
            >
              <Image
                className="product__img"
                src="/granite-vases.png"
                alt="catalog/monument-accessories"
                width="350"
                height="270"
                priority={true}
              />
              <h3 className="product__text">Аксесуари</h3>
            </Link>
          </li>
          <li className="product__item">
            <Link href="/catalog/icons" className="product__link">
              <Image
                className="product__img"
                src="/icon.jpeg"
                alt="catalog/icons"
                width="350"
                height="270"
                priority={true}
              />
              <h3 className="product__text">Ікони</h3>
            </Link>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default Product;
