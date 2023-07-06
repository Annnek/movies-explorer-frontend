class MainApi {
  constructor(config) {
    this._baseUrl = config.baseUrl; //адрес сервера
    this._headers = config.headers; //заголовки запроса
  }

  // Формирую запрос на сервер, если прошел не удачно, возвращаем ошибку!
  _handleSendingRequest(res) {
    if (res.ok) {
      return Promise.resolve(res.json());
    }
    // Если ошибка пришла, отклоняем промис
    return Promise.reject(`Ошибка: ${res.status}`);
  }

  saveMovie(movie) {
    return fetch(`${this._baseUrl}/movies`, {
      method: "POST",
      headers: this._headers,
      body: JSON.stringify(movie),
    }).then((res) => {
      return this._handleSendingRequest(res);
    });
  }

  deleteMovie(movie) {
    return fetch(`${this._baseUrl}/movies/${movie.id}`, {
      method: "DELETE",
      headers: this._headers,
    }).then((res) => {
      return this._handleSendingRequest(res);
    });
  }

  getSavedMovies() {
    return fetch(`${this._baseUrl}/movies`, {
      method: "GET",
      headers: this._headers,
    }).then((res) => {
      return this._handleSendingRequest(res);
    });
  }
}

export const mainApi = new MainApi({
  baseUrl: "https://api.nomoreparties.co",
  headers: {
    "Content-Type": "application/json",
  },
});
