const button = document.querySelector(".container__button");

const workers = [
  {
    name: "Сеня",
    avatar: "/images/3d0bf497c0f9487aa3a74918c87b2cda.png",
    bio: "Потрясающий и блистательный",
    job: "Кудесник",
  },

  {
    name: "Тест",
    avatar: "Тут картинка",
    bio: "Невероятный человек",
    job: "Волшебник",
  },

  {
    name: "лала",
    avatar: "лалала",
    bio: "лалалалала",
    job: "Колонизатор",
  },

  {
    name: "лоло",
    avatar: "лололо",
    bio: "лололололо",
    job: "Уравнитель",
  },
];

function checkButton() {
  let random = Math.floor(Math.random() * workers.length);

  console.log(workers[random]);

  const name = document.querySelector(".name");
  const job = document.querySelector(".job");
  const personality = document.querySelector(".personality");

  name.textContent = workers[random].name;
  job.textContent = workers[random].job;
  personality.textContent = workers[random].bio;


}

button.addEventListener("click", checkButton);
