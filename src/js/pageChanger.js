const pageSelectors = document.querySelectorAll(".page-selector");
const pageDescriptions = document.getElementById("page");
const animatePage = "zoomIn";
pageDescriptions.innerHTML = description();

pageSelectors.forEach((selector) => {
  selector.addEventListener("click", () => {
    pageDescriptions.classList.remove("more-active");
    pageSelectors.forEach((el) => {
      el.classList.remove("white");
      pageDescriptions.classList.remove("actors");
    });
    selector.classList.add("white");
    pageDescriptions.classList.add(`animate__${animatePage}`);
    switch (selector.textContent) {
      case "Описание":
        pageDescriptions.innerHTML = description();
        break;
      case "Рецензии":
        pageDescriptions.innerHTML = reviews();
        break;
      case "Премьеры":
        pageDescriptions.innerHTML = premiers();
        break;
      case "Актеры":
        pageDescriptions.classList.add("actors");
        pageDescriptions.innerHTML = actors();
        break;
      case "Награды":
        pageDescriptions.innerHTML = medals();
        break;
      case "Факты":
        pageDescriptions.innerHTML = facts();
        break;
      case "Сайты":
        pageDescriptions.innerHTML = sites();
        break;
      default:
        pageDescriptions.innerHTML = `Не удалось обработать запрос`;
        break;
    }
    setTimeout(() => {
      pageDescriptions.classList.remove(`animate__${animatePage}`);
    }, 1000);
  });
});
function description() {
  return `            
<p>
    Предстоящий американский супергеройский фильм, основанный на
    одноимённых комиксах издательства DC Comics. Картина будет выпущена
    компанией Warner Bros. и будет перезагрузкой всех фильмов о Бэтмене.
    <br />
    Фильм является десятым по счёту фильмом из Расширенной вселенной DC.
    Режиссёром и сценаристом фильма выступит Мэтт Ривз, а главную роль
    исполнит Роберт Паттинсон
    <h2>Разработка</h2>
    В октябре 2014 года студия Warner Bros. объявила, что в разработке
    находится сольный фильм о Бэтмене, роль которого вновь исполнит Бен
    Аффлек. В июле 2015 года сообщалось, что Аффлек ведёт переговоры со
    студией по поводу постановки фильма и совместного написания сценария
    с Джеффом Джонсом.
    <br />
    После выхода фильма «Бэтмен против Супермена: На заре
    справедливости» руководитель агентства WME Патрик Уайтсел
    подтвердил, что Аффлек написал сценарий для сольного фильма о
    Бэтмене и в настоящий момент его рассматривают студия и DC. В мае
    2016 года Джереми Айронс подтвердил, что он появится в фильме про
    Тёмного Рыцаря.
    <br />
    На Comic-Con в Сан-Диего в июле 2016 года было официально
    подтверждено, что Аффлек станет режиссёром картины. В августе 2016
    года на одной из страниц Аффлека в социальных сетях был опубликован
    тестовый материал, в котором был показан персонаж Детстроук. 8
    сентября 2016 года Джефф Джонс подтвердил, что Джо Манганьелло
    сыграет наёмника Слейда Уилсона, который, возможно, станет главным
    злодеем фильма.
</p>`;
}
function reviews() {
  return `
  Здесь скоро появятся отзывы`;
}
function premiers() {
  return `
  <div>
  <b>24 июня</b>
  2021 Аргентина
</div>
<div>
  <b>24 июня</b>
  2021 Россия
</div>
<div>
  <b>24 июня</b>
  2021 Словакия
</div>
<div>
  <b>25 июня</b>
  2021 Американские Виргинские острова
</div>
<div>
  <b>25 июня</b>
  2021 Бельгия
</div>
<div>
  <b>25 июня</b>
  2021 Бразилия
</div>
<div>
  <b>25 июня</b>
  2021 Великобритания
</div>
<div>
  <b>25 июня</b>
  2021 Канада
</div>
<div>
  <b>25 июня</b>
  2021 Литва
</div>
<div>
  <b>25 июня</b>
  2021 Португалия
</div>
<div>
  <b>25 июня</b>
  2021 США
</div>`;
}
function actors() {
  return `
  <div class="actor-card">
  <img src="src/img/actors/1.png" alt="" />
  <b>Роберт Паттисон</b>
  Брюс Уэйн / Бэтмен
</div>
<div class="actor-card">
  <img src="src/img/actors/2.png" alt="" />
  <b>Зои Кравиц</b>
  Селина Кайл
</div>
<div class="actor-card">
  <img src="src/img/actors/3.png" alt="" />
  <b>Пол Дано</b>
  Эдвард Нэштон
</div>
<div class="actor-card">
  <img src="src/img/actors/4.png" alt="" />
  <b>Джеффри Райт</b>
  Джеймс Гордон
</div>
<div class="actor-card">
  <img src="src/img/actors/5.png" alt="" />
  <b>Энди Сёркис</b>
  Альфред Пенниоурт
</div>
<div class="actor-card">
  <img src="src/img/actors/6.png" alt="" />
  <b>Джон Туртурро</b>
  Кармайн Фальконе
</div>
  `;
}
function medals() {
  return `
  У фильма пока нет наград.
  `;
}
function facts() {
  return `
  О фильме пока нет фактов.
  `;
}
function sites() {
  return `
  У фильма нет сайтов.
  `;
}
