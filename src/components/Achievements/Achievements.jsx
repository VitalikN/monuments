import { FaHandshake, FaCheckDouble } from "react-icons/fa";
import { MdWorkHistory } from "react-icons/md";
import { BiSolidLike } from "react-icons/bi";

import "../../sass/utils/_container.scss";
import "../../sass/layouts/achievements.scss";

const Achievements = () => {
  return (
    <section className="achievements__section">
      <div className="container">
        <ul className="achievements__list">
          <li className="achievements__item">
            <MdWorkHistory className="list__icon" />
            <h3 className="list__title">Працюємо з 2015 року</h3>
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
        </ul>
      </div>
    </section>
  );
};

export default Achievements;
