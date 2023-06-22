import SectionTitle from "../SectionTitle/SectionTitle";

function AboutProject() {
  return (
    <section className="about">
      <SectionTitle>О проекте</SectionTitle>
      <ul className="about__list">
        <li>
          <h3 className="about__title">Дипломный проект включал 5 этапов</h3>
          <p className="about__text">
            Составление плана, работу над бэкендом, вёрстку, добавление
            функциональности и финальные доработки.
          </p>
        </li>
        <li>
          <h3 className="about__title">На выполнение диплома ушло 5 недель</h3>
          <p className="about__text">
            У каждого этапа был мягкий и жёсткий дедлайн, которые нужно было
            соблюдать, чтобы успешно защититься.
          </p>
        </li>
      </ul>
      <div className="about__timing">
        <div className="about__week about__week_type_first">
          <span className="about__week-lasts about__week-lasts_type_first">
            1 неделя
          </span>
          <span className="about__week-title">Back-end</span>
        </div>
        <div className="about__week about__week_type_other">
          <span className="about__week-lasts about__week-lasts_type_other">
            4 недели
          </span>
          <span className="about__week-title">Front-end</span>
        </div>
      </div>
    </section>
  );
}

export default AboutProject;
