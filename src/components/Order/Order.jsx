import "../../sass/utils/_container.scss";
import "../../sass/layouts/order.scss";
import { BsImages } from "react-icons/bs";
import { IoMdCheckboxOutline } from "react-icons/io";
import { LiaClipboardListSolid } from "react-icons/lia";
import { CgSearchLoading } from "react-icons/cg";
import { GiTakeMyMoney } from "react-icons/gi";
import { TbTruckDelivery } from "react-icons/tb";
const Order = () => {
  return (
    <section className="order__section">
      <div className="container">
        <h2 className="order__title">Етапи замовлення</h2>
        <ul className="order__list">
          <li className="order__item">
            <BsImages className="order__icon" />
            <p className="order__text">1. Ознайомтеся з продукцією</p>
          </li>
          <li className="order__item">
            <IoMdCheckboxOutline className="order__icon" />
            <p className="order__text">2. Оберіть потрібний товар</p>
          </li>
          <li className="order__item">
            <LiaClipboardListSolid className="order__icon" />
            <p className="order__text">3. Ми оформляємо замовлення</p>
          </li>
          <li className="order__item">
            <CgSearchLoading className="order__icon" />
            <p className="order__text">4. Узгодження деталей</p>
          </li>
          <li className="order__item">
            <GiTakeMyMoney className="order__icon" />
            <p className="order__text">
              5. Ви вносите предоплату будь-яким зручним для Вас способом
            </p>
          </li>
          <li className="order__item">
            <TbTruckDelivery className="order__icon" />
            <p className="order__text">6. Доставка та встановлення</p>
          </li>
          <li className="order__item">
            <GiTakeMyMoney className="order__icon" />

            <p className="order__text">7. Розрахунок</p>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default Order;
