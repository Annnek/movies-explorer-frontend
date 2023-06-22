function Portfolio() {
  return (
    <section className="portfolio">
      <h2 className="portfolio__title">Портфолио</h2>
      <ul className="portfolio__list">
        <li>
          <a
            className="portfolio__link"
            href="https://github.com/Annnek/how-to-learn"
            target="_blank"
            rel="noopener noreferrer">
            Статичный сайт
          </a>
        </li>
        <li>
          <a
            className="portfolio__link"
            href="https://github.com/Annnek/russian-travel"
            target="_blank"
            rel="noopener noreferrer">
            Адаптивный сайт
          </a>
        </li>
        <li>
          <a
            className="portfolio__link"
            href="https://github.com/Annnek/react-mesto-api-full-gha"
            target="_blank"
            rel="noopener noreferrer">
            Одностраничное приложение
          </a>
        </li>
      </ul>
    </section>
  );
}

export default Portfolio;
