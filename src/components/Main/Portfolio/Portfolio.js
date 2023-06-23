function Portfolio() {
  return (
    <section className="portfolio">
      <h2 className="portfolio__title">Портфолио</h2>
      <ul className="portfolio__list">
        <li className="portfolio__item">
          <a
            href="https://github.com/Annnek/how-to-learn"
            className="portfolio__link"
            target="_blank"
            rel="noreferrer">
            Статичный сайт
          </a>
        </li>
        <li className="portfolio__item">
          <a
            href="https://github.com/Annnek/russian-travel"
            className="portfolio__link"
            target="_blank"
            rel="noreferrer">
            Адаптивный сайт
          </a>
        </li>
        <li className="portfolio__item">
          <a
            href="https://github.com/Annnek/react-mesto-api-full-ghan"
            className="portfolio__link"
            target="_blank"
            rel="noreferrer">
            Одностраничное приложение
          </a>
        </li>
      </ul>
    </section>
  );
}

export default Portfolio;
