const button = document.querySelector(".container__button");

const workers = [
  {
    name: "Сеня",
    avatar: "/images/3d0bf497c0f9487aa3a74918c87b2cda.png",
    bio: "Потрясающий и блистательный",
  },

  {
    name: "Тест",
    avatar: "",
    bio: "",
  },

  {
    name: "лала",
    avatar: "лалала",
    bio: "лалалалала",
  },

  {
    name: "лоло",
    avatar: "лололо",
    bio: "лололололо",
  },
];



function checkButton() {

  let random = Math.floor(Math.random() * workers.length);

  console.log(workers[random]);
}

button.addEventListener("click", checkButton);

// function getRandomNumber(low, high) {
//   let r = Math.floor(Math.random() * (high - low + 1)) + low;
//   return r;
// }

// for (let i = 0; i < groceries.length; i++) {
//   let item = groceries[i];
//   }



