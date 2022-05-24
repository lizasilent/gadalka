
const button = document.querySelector(".container__button");

const workers = [
    {
        name: "Сеня",
        avatar: "/images/3d0bf497c0f9487aa3a74918c87b2cda.png",
        bio: "Потрясающий и блистательный"
        
      },

      {
        name: "Тест",
        avatar: "",
        bio: ""
        
      },

      {
        name: "",
        avatar: "",
        bio: ""
        
      },

      {
        name: "",
        avatar: "",
        bio: ""
        
      },
]



function checkButton() {

    console.log("всё работает");

    
}

// for (let i = 0; i < groceries.length; i++) {
//   let item = groceries[i];
//   }

button.addEventListener("click", checkButton);