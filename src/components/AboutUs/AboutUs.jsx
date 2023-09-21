import "../../sass/utils/_container.scss";

import "../../sass/layouts/about.scss";

const AboutUs = () => {
  return (
    <section className="about__section">
      <div className="container">
        <p className="about__text about__lead">
          Наша компанія спеціалізується на виготовленні пам’ятників та
          надгробків для мешканців м. Мукачево та всієї Закарпатської області. З
          2006 року ми постійно вдосконалюємо свої послуги, інвестуючи в новітні
          технології та ідеї.
        </p>
        <p className="about__text">
          Використовуючи виключно високоякісну сировину, яка доставляється прямо
          з місць видобутку, ми гарантуємо тривалий термін служби наших виробів.
          Наш асортимент сировини включає: габро, лабрадорит, покостівське
          граніт, маславський граніт, лезниківський граніт, капустянський
          граніт, та токівський граніт.
        </p>
        <h2 className="about__title">Послуги, які ми пропонуємо:</h2>
        <ul className="about__list">
          <li className="about__item">
            <p className="about__text"> Художнє оформлення пам’ятника</p>
          </li>
          <li className="about__item">
            <p className="about__text"> Заливка армованого фундаменту</p>
          </li>
          <li className="about__item">
            <p className="about__text">
              Доставка і монтаж пам’ятників в м. Мукачево та Закарпатській
              області
            </p>
          </li>
          <li className="about__item">
            <p className="about__text">
              Укладання плитки навколо пам`ятника за бажанням замовника
            </p>
          </li>
          <li className="about__item">
            <p className="about__text">
              Виготовлення та встановлення аксесуарів: вази, книжки, гранітні
              лавки, підсвічники, гранітні та латунні хрести.
            </p>
          </li>
        </ul>
        <h2 className="about__title">Чому обирати нас:</h2>
        <ul className="about__list">
          <li className="about__item">
            <p className="about__text">
              1. <span className="about__chip"> Якість: </span>наша репутація
              підтверджена часом і численними відгуками задоволених клієнтів.
            </p>
          </li>
          <li className="about__item">
            <p className="about__text">
              2.{" "}
              <span className="about__chip">Розуміння побажань клієнта: </span>
              ми завжди стремимося до ідеального втілення ваших ідей.
            </p>
          </li>
          <li className="about__item">
            <p className="about__text">
              3.<span className="about__chip"> Своєчасність: </span>після
              оформлення замовлення ви завжди отримаєте чітке орієнтування за
              термінами його виконання.
            </p>
          </li>
          <li className="about__item">
            <p className="about__text">
              4. <span className="about__chip">Доступність: </span>завдяки
              прямим поставкам сировини ми можемо пропонувати демократичні ціни
              на наші товари і послуги.
            </p>
          </li>
          <li className="about__item">
            <p className="about__text">
              5. <span className="about__chip">Комплексний підхід:</span> від
              виготовлення до доставки та монтажу.
            </p>
          </li>
        </ul>
        <p className="about__text">
          Запрошуємо вас ознайомитися з нашими виробами в онлайн-каталозі. Ми
          гарантуємо креативний підхід, високу якість виробів та відповідальне
          виконання вашого замовлення. Чекаємо на вас!
        </p>
      </div>
    </section>
  );
};

export default AboutUs;
