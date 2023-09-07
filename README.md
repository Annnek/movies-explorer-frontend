# **Веб-сервис поиска фильмов**

# Movies: веб-сервис поиска фильмов (frontend)

- [Описание](#описание)
- [Технологии](#технологии)
- [Функциональность](#функциональность)
<!-- - [Screenshot](#screenshot) -->
- [**Веб-сервис поиска фильмов**](#веб-сервис-поиска-фильмов)
- [Movies: веб-сервис поиска фильмов (frontend)](#movies-веб-сервис-поиска-фильмов-frontend)
  - [Описание](#описание)
  - [Технологии](#технологии)
  - [Функциональность](#функциональность)
  - [Директории](#директории)
  - [Запуск проекта](#запуск-проекта)
  - [Планы по доработке](#планы-по-доработке)
  - [Ссылки](#ссылки)

## Описание

Сервис поиска фильмов с лендингом портфолио автора.

Общий функционал:

- авторизация и регистрация пользователя;
- редактирование данных пользователя;
- поиск фильмов по названию и длительности;
- сохранение фильмов в личной коллекции и удаление фильмов

Репозиторий backend проекта [https://github.com/Annnek/movies-explorer-api](https://github.com/Annnek/movies-explorer-api)

---

## Технологии

- JavaScript (стандарт ES6)
- React (CRA, JSX, функциональные компоненты + хуки)
- HTML5
- CSS3
- БЭМ
- Адаптивная верстка, Flexbox, Grid Layout
- Figma
- Webpack

---

## Функциональность

- Защищенность роутов (нельзя перейти к приложению-поисковику, если не выполнен вход)
- Реализована "живая" валидация всех форм/полей ввода с использованием регулярных выражений и сторонних библиотек
- Использование собственных хуков (универсальный обработчик полей, валидация, контроль разрешения экрана)
- Возможность поиска фильмов со стороннего API
- Сохранение/удаление найденных фильмов к себе в аккаунт
- Реализован фильтр короткометражных фильмов
- Запоминание состояния полей ввода (в форме поиска фильмов), фильтра и найденных фильмов (при обновлении страницы данные не будут утеряны)
- Поиск фильмов как на русском, так и английском языке
- Реализован попап для демонстрации ошибок сервера или некорректных введенных данных
- При загрузке данных показывается прелоадер. По окончанию загрузки он скрывается
- Полноценный респонсив для всех популярных разрешений экрана
- Бургерное меню для мобильной и планшетной версии
- Реализовано закрытие попапа и бургерного меню по оверлею или по клавише Esc
- Переход к показу трейлера фильма при нажатии на постер
- Показ данных о фильме при наведении курсора на постер
- Все нужные кнопки подсвечиваются outline, им привязано невидимое, но слышимое описание, для людей с ограниченными возможностями
- Приложение сверстано по BEM(БЭМ), соблюдается семантичность
- На странице поиска фильмов по клику на кнопку "Ещё" - показываются дополнительные фильмы (на роуте с сохранёнными фильмами показываются сразу все фильмы)
- Утилитарные функции, константы, функции обращения к серверу вынесены в отдельный файл
- Запросы к серверу написаны с использованием парадигмы ООП
- Возможность редактирования своего профиля (почты и имени)
- Запоминание состояния входа пользователя (при обновлении страницы будет выполнен автоматический вход)
- Реализована микроанимация всех ссылок и кнопок
- Для создания сеток используется flex и grid
- Все данные хранятся на сервере, использовано стороннее и собственное API

---

<!-- ## Screenshot -->

## Директории

`/components` — функциональные компоненты
`/context` — контекст
`/hooks` — кастомные хуки (Custom hook)
`/images` — изображения
`/vendor` — файлы библиотек и шрифты
`/utils` — папка с файлами, требуемых для работы сервиса (утилитарные функции, запросы к серверу, константы)

---

## Запуск проекта

`npm i` — установка зависимостей
`npm run build` — запуск проекта в режиме продакшн, с формированием файлов подготовленных к деплою в директории /build
`npm start` — запуск проекта в режиме разработки

---

## Планы по доработке

- Реализовать сохранение токена в cookies

## Ссылки

- Домен приложения (в разработке)
- Ссылка на API сервер проекта (в разработке)
- Cсылка на репозиторий backend проекта https://github.com/Annnek/movies-explorer-api
- [Ссылка на макет в Figma](<https://www.figma.com/file/ZSpS2ci06Zhy5NVXjoZLNa/Diploma-(Copy_Anna)?type=design&node-id=37256-12852&mode=design&t=x71nMR2wNlfCuIET-0>)

<!-- Stack: JavaScript, React, JSX, HTML5, CSS3, БЭМ, Flexbox, Grid Layout, Figma.

### Состоит из двух частей:

- [Backend](https://github.com/Annnek/movies-explorer-api)
- Frontend :star: _этот репозиторий_

---

- [Ссылка на макет в Figma](<https://www.figma.com/file/ZSpS2ci06Zhy5NVXjoZLNa/Diploma-(Copy_Anna)?type=design&node-id=37256-12852&mode=design&t=x71nMR2wNlfCuIET-0>)
- [Результат по ссылке](https://bestfilms.nomoredomains.rocks)
- [Ссылка на pull request](https://github.com/Annnek/movies-explorer-frontend/pull/2) -->

<!-- # Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify) -->
