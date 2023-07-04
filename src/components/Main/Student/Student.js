import studentPhoto from "../../../images/my_photo.png";
import SectionTitle from "../SectionTitle/SectionTitle.js";

function Student() {
  return (
    <section id="student" className="student">
      <SectionTitle>Студент</SectionTitle>
      <div className="student__info">
        <div className="student__bio">
          <h3 className="student__name">Анна</h3>
          <p className="student__short">Фронтенд-разработчик.</p>
          <p className="student__description">
            My previous job was in IT company where I fell in love with the
            widespread possibilities of modern technology. I moved from
            marketing to IT department. My previous experience in marketing and
            project management helps me understand the real needs of the
            business as well as the specifics of product development, key
            indicators.
          </p>
          <a
            href="https://github.com/Annnek"
            className="student__github"
            target="_blank"
            rel="noopener noreferrer">
            Github
          </a>
        </div>
        <img
          className="student__photo"
          src={studentPhoto}
          alt="Фотография Анны Нехорошевой"
        />
      </div>
    </section>
  );
}

export default Student;
