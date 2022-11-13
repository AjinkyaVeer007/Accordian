const faqData = [
  {
    id: 1,
    question: "Who are we?",
    answer:
      "We enable upscaling careers through flexible, interactive and collaborative learning. We believe in building learning communities by bringing together mentors, young minds, and creators.",
  },
  {
    id: 2,
    question: "What do we do?",
    answer:
      "Building learning communities with Our Affordable & Competent Courses",
  },
  {
    id: 3,
    question: "Are the community classes boring?",
    answer: "No, not at all!!!",
  },
];

faqData.forEach((item) => {
  let parent = document.querySelector(".accordian_body");
  let mainDiv = document.createElement("div");
  mainDiv.classList.add("faq");

  parent.appendChild(mainDiv);

  let flexDiv = document.createElement("div");
  flexDiv.classList.add("faq_header");

  mainDiv.appendChild(flexDiv);

  let questionText = document.createElement("h3");
  let buttonText = document.createElement("button");
  buttonText.classList.add("show_btn");

  let answerText = document.createElement("p");
  answerText.style.display = "none";

  flexDiv.appendChild(questionText);
  flexDiv.appendChild(buttonText);

  mainDiv.appendChild(answerText);

  questionText.innerHTML = item.question;
  answerText.innerHTML = item.answer;
  buttonText.innerHTML = "+";

  let num = 0;
  buttonText.addEventListener("click", () => {
    num = num + 1;
    if (num % 2 == 0) {
      buttonText.innerHTML = "+";
      answerText.style.display = "none";
    } else {
      buttonText.innerHTML = "-";
      answerText.style.display = "block";
    }
  });
});
