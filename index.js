const button = document.querySelector(".container__button");


function handleRandom() {
  let random = Math.floor(Math.random() * workers.length);

  console.log(workers[random]);

  const name = document.querySelector(".name");
  const job = document.querySelector(".job");
  const personality = document.querySelector(".personality");
  const avatar = document.querySelector(".avatar");

  name.textContent = workers[random].name;
  job.textContent = workers[random].job;
  personality.textContent = workers[random].bio;
  avatar.src = workers[random].link;

}

button.addEventListener("click", handleRandom);
