const directors = [
  {
    name: "Стивен Спилберг",
    career: "Продюсер, Режиссёр, Актёр, Сценарист, Монтажёр",
    films:
      "https://ru.wikipedia.org/wiki/%D0%A4%D0%B8%D0%BB%D1%8C%D0%BC%D0%BE%D0%B3%D1%80%D0%B0%D1%84%D0%B8%D1%8F_%D0%A1%D1%82%D0%B8%D0%B2%D0%B5%D0%BD%D0%B0_%D0%A1%D0%BF%D0%B8%D0%BB%D0%B1%D0%B5%D1%80%D0%B3%D0%B0",
    top_rated_film: "Список Шиндлера",
  },
  {
    name: "Кристофер Нолан",
    career:
      "Сценарист, Продюсер, Режиссёр, Оператор, Монтажёр, Актёр, Композитор",
    films:
      "https://www.film.ru/compilation/vse-filmy-kristofera-nolana-ot-luchshego-k-horoshemu",
    top_rated_film: "Начало",
  },
  {
    name: "Мартин МакДона",
    career: "Сценарист, Режиссёр, Продюсер",
    films: "https://www.film.ru/person/martin-makdonah",
    top_rated_film: "Три билборда на границе Эббинга, Миссури",
  },
  {
    name: "Алексей Балабанов",
    career: "Режиссёр, Сценарист, Актёр, Продюсер",
    films: "https://www.film.ru/person/aleksey-balabanov",
    top_rated_film: "Брат",
  },
  {
    name: "Питер Фаррелли",
    career: "Продюсер, Режиссёр, Сценарист, Актёр",
    films: "https://www.film.ru/person/piter-farrelli",
    top_rated_film: "Зелёная книга",
  },
  {
    name: "Юрий Быков",
    career: "Актёр, Режиссёр, Сценарист, Композитор, Монтажёр, Продюсер",
    films: "https://www.film.ru/person/yuriy-bykov",
    top_rated_film: "Дурак",
  },
  {
    name: "Жан-Марк Валле",
    career: "Режиссер, Продюсер, Монтажёр, Актёр, Сценарист",
    films: "https://www.film.ru/person/zhan-mark-valle",
    top_rated_film: "Далласский клуб покупателей",
  },
];

// Массив для хранения лучших фильмов
const topFilmsList = [];

// Получаем контейнер для добавления информации о режиссёрах
const directorsContainer = document.getElementById("directors-container");

// Используем forEach для перебора массива режиссёров
directors.forEach((director) => {
  // Создаем элемент для каждого режиссера
  const directorDiv = document.createElement("div");
  directorDiv.className = "director";

  // Создаем заголовок h2 для имени режиссера
  const nameHeading = document.createElement("h2");
  const nameText = document.createTextNode(director.name);
  nameHeading.appendChild(nameText);
  directorDiv.appendChild(nameHeading);

  // Создаем абзац для карьеры режиссера
  const careerParagraph = document.createElement("p");
  const careerLabel = document.createElement("strong");
  careerLabel.textContent = "Карьера: ";
  careerParagraph.appendChild(careerLabel);
  careerParagraph.append(director.career);
  directorDiv.appendChild(careerParagraph);

  // Создаем абзац для ссылки на фильмы режиссера
  const filmsParagraph = document.createElement("p");
  const filmsLabel = document.createElement("strong");
  filmsLabel.textContent = "Фильмы: ";
  filmsParagraph.appendChild(filmsLabel);

  const filmsLink = document.createElement("a");
  filmsLink.href = director.films;
  filmsLink.textContent = "Смотреть фильмы";
  filmsLink.target = "_blank";
  filmsLink.className = "link";
  filmsParagraph.appendChild(filmsLink);
  directorDiv.appendChild(filmsParagraph);

  // Создаем абзац для лучшего фильма режиссера
  const topFilmParagraph = document.createElement("p");
  const topFilmLabel = document.createElement("strong");
  topFilmLabel.textContent = "Лучший фильм: ";
  topFilmParagraph.appendChild(topFilmLabel);
  topFilmParagraph.append(director.top_rated_film);
  directorDiv.appendChild(topFilmParagraph);

  // Добавляем лучшую оценку в массив
  topFilmsList.push(director.top_rated_film);

  // Добавляем элемент на страницу
  directorsContainer.appendChild(directorDiv);
});

// Выводим массив лучших фильмов в консоль
console.log("Лучшие фильмы режиссёров:", topFilmsList);
