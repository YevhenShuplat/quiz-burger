document.addEventListener("DOMContentLoaded", function () {
  const btnOpenModal = document.querySelector("#btnOpenModal"),
    modalBlock = document.querySelector("#modalBlock"),
    closeModal = document.querySelector("#closeModal"),
    questionTitle = document.querySelector("#question"),
    formAnswers = document.querySelector("#formAnswers"),
    burgerBtn = document.getElementById("burger"),
    nextButton = document.querySelector("#next"),
    prevButton = document.querySelector("#prev");

  const questions = [
    {
      question: "Какого цвета бургер?",
      answers: [
        {
          title: "Стандарт",
          url: "./image/burger.png",
        },
        {
          title: "Черный",
          url: "./image/burgerBlack.png",
        },
      ],
      type: "radio",
    },
    {
      question: "Из какого мяса котлета?",
      answers: [
        {
          title: "Курица",
          url: "./image/chickenMeat.png",
        },
        {
          title: "Говядина",
          url: "./image/beefMeat.png",
        },
        {
          title: "Свинина",
          url: "./image/porkMeat.png",
        },
      ],
      type: "radio",
    },
    {
      question: "Дополнительные ингредиенты?",
      answers: [
        {
          title: "Помидор",
          url: "./image/tomato.png",
        },
        {
          title: "Огурец",
          url: "./image/cucumber.png",
        },
        {
          title: "Салат",
          url: "./image/salad.png",
        },
        {
          title: "Лук",
          url: "./image/onion.png",
        },
      ],
      type: "checkbox",
    },
    {
      question: "Добавить соус?",
      answers: [
        {
          title: "Чесночный",
          url: "./image/sauce1.png",
        },
        {
          title: "Томатный",
          url: "./image/sauce2.png",
        },
        {
          title: "Горчичный",
          url: "./image/sauce3.png",
        },
      ],
      type: "radio",
    },
  ];

  burgerBtn.style.display = "none";

  let clientWidth = document.documentElement.clientWidth;

  if (clientWidth < 768) {
    burgerBtn.style.display = "flex";
  } else {
    burgerBtn.style.display = "none";
  }

  window.addEventListener("resize", function () {
    clientWidth = document.documentElement.clientWidth;

    if (clientWidth < 768) {
      burgerBtn.style.display = "flex";
    } else {
      burgerBtn.style.display = "none";
    }
  });
  burgerBtn.addEventListener("click", function () {
    burgerBtn.classList.add("active");
    modalBlock.classList.add("d-block");
    playTest();
  });

  btnOpenModal.addEventListener("click", () => {
    modalBlock.classList.add("d-block");

    playTest();
  });
  closeModal.addEventListener("click", () => {
    modalBlock.classList.remove("d-block");
    burgerBtn.classList.remove("active");
  });

  const playTest = (index) => {
    let numberQuestion = 0;

    const renderAnswers = (index) => {
      questions[index].answers.forEach((answer) => {
        const answerItem = document.createElement("div");

        answerItem.classList.add("answers-item", "d-flex", "flex-column");

        answerItem.innerHTML = `
        <input type="${questions[index].type}" id="${answer.title}" name="answer" class="d-none">
        <label for="${answer.title}" class="d-flex flex-column justify-content-between">
                 <img class="answerImg" src="${answer.url}" alt="">
                <span>${answer.title}</span>
        </label>
        `;
        formAnswers.appendChild(answerItem);
      });
    };

    const renderQuestions = (indexQuestion) => {
      if (indexQuestion === 0) {
        prevButton.style.display = "none";
      } else {
        prevButton.style.display = "block";
      }
      if (numberQuestion === questions.length - 1) {
        nextButton.style.display = "none";
      } else {
        nextButton.style.display = "block";
      }
      formAnswers.innerHTML = "";
      questionTitle.textContent = `${questions[indexQuestion].question}`;

      renderAnswers(indexQuestion);
    };
    renderQuestions(numberQuestion);

    nextButton.onclick = () => {
      numberQuestion++;
      renderQuestions(numberQuestion);
    };
    prevButton.onclick = () => {
      numberQuestion--;
      renderQuestions(numberQuestion);
    };
  };
});
