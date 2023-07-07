// конвертирование минут в часы и минуты
export const convertDuration = (duration) => {
  const hours = Math.trunc(duration / 60);
  const munutes = duration % 60;
  const resultTime = [];

  if (hours) resultTime.push(`${hours}ч`);
  if (munutes) resultTime.push(`${munutes}м`);

  return resultTime.join(" ");
};

//чекбокс - фильтрация короткометражек по длительности
export const filterMoviesByDuration = (movies) => {
  return movies.filter((movie) => movie.duration <= 40);
};
