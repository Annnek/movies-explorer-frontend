export const MOVIES__URL = "https://api.nomoreparties.co/beatfilm-movies";

// export const getMovies = () => {
//   return fetch(`${MOVIES__URL}`, {
//     method: "GET",
//     headers: {
//       "Content-Type": "application/json",
//     },
//   }).then((res) => {
//     if (res.ok) {
//       return res.json();
//     }
//     return Promise.reject(res.status);
//   });
// };

export const getMovies = () => {
  return fetch(`${MOVIES__URL}`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  }).then((res) => {
    if (res.ok) {
      return res.json();
    } else {
      throw new Error("Не удалось получить данные по API"); // Генерируем ошибку с сообщением
    }
  });
};
