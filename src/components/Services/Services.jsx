import "../../sass/utils/_container.scss";
import "../../sass/layouts/services.scss";

import { IoMdCheckboxOutline } from "react-icons/io";
const Services = () => {
  return (
    <section className="services__section">
      <div className="container">
        <h2 className="services__title">Послуги</h2>
        <ul className="services__list">
          <li className="services__item">
            <IoMdCheckboxOutline className="services__icon" />
            <p className="services__text">Художнє оформлення пам`ятника</p>
          </li>
          <li className="services__item">
            <IoMdCheckboxOutline className="services__icon" />
            <p className="services__text">Заливка армованого фундаменту</p>
          </li>
          <li className="services__item">
            <IoMdCheckboxOutline className="services__icon" />
            <p className="services__text">
              Доставка і монтаж пам`ятників по м. Мукачево та Закарпатській обл.
            </p>
          </li>
          <li className="services__item">
            <IoMdCheckboxOutline className="services__icon" />
            <p className="services__text">
              Укладання плитки навколо памятника за бажанням замовника.
            </p>
          </li>

          <li className="services__item">
            <IoMdCheckboxOutline className="services__icon" />
            <p className="services__text">
              Виготовлення та встановлення аксесуарів,таких як: вази, книжки
              ,гранітні та дерев`яні лавки,підсвічники (лампадки) хрести
              гранітні та латунні
            </p>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default Services;
