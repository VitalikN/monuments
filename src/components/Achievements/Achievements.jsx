import { FaHandshake, FaCheckDouble, FaUser } from "react-icons/fa";
import { MdWorkHistory, MdFactCheck } from "react-icons/md";
import { BiSolidLike } from "react-icons/bi";

import "../../sass/utils/_container.scss";
import "../../sass/layouts/achievements.scss";

const Achievements = () => {
  return (
    <section className="achievements__section">
      <div className="container">
        <h2 className="achievements__title">Наші переваги</h2>
        <ul className="achievements__list">
          <li className="achievements__item">
            <MdWorkHistory className="list__icon" />
            <h3 className="list__title">Працюємо з 2006 року</h3>
          </li>

          <li className="achievements__item">
            <FaUser className="list__icon" />
            <h3 className="list__title">Професійна художня робота</h3>
          </li>
          <li className="achievements__item">
            <FaHandshake className="list__icon" />
            <h3 className="list__title">Надаємо гарантію</h3>
          </li>
          <li className="achievements__item">
            <FaCheckDouble className="list__icon" />
            <h3 className="list__title">Широкий спектр послуг</h3>
          </li>
          <li className="achievements__item">
            <BiSolidLike className="list__icon" />
            <h3 className="list__title">Висока якість продукції</h3>
          </li>
          <li className="achievements__item">
            <MdFactCheck className="list__icon" />
            <h3 className="list__title"> Індивідуальний підхід</h3>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default Achievements;
