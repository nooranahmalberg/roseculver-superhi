let pageNumber = 0;

const pageInfo = [
  {
    copy: "a Brisbane-based UX/UI designer",
    background: "#edc7a9",
    circle: "#3e78ed",
  },
  { copy: "Aespa's biggest fan", background: "#a1fffe", circle: "#e34a47" },
  {
    copy: "looking for work at the start of October",
    background: "#d3c7f3",
    circle: "#f7fe00",
  },
  {
    copy: "always redesigning her <a href='https://www.nooranahmalberg.com'>portfolio website</a>",
    background: "#faffb8",
    circle: "#b472e6",
  },
];

const tagEl = document.querySelector("h2");
const backgroundEl = document.querySelector("body");
const circleEl = document.querySelector("main div.circle");
const nextBtn = document.querySelector("footer img.next");
const prevBtn = document.querySelector("footer img.prev");
const randomBtn = document.querySelector("footer img.random");

nextBtn.addEventListener("click", next);
document.addEventListener("keyup", function (event) {
  console.log("this is a test!");
  if (event.key == "ArrowRight") {
    next();
  }
});

prevBtn.addEventListener("click", prev);
document.addEventListener("keydown", function (event) {
  if (event.key == "ArrowLeft") {
    prev();
  }
});

randomBtn.addEventListener("click", random);

function next() {
  pageNumber = pageNumber + 1;
  if (pageNumber > pageInfo.length - 1) {
    pageNumber = 0;
  }
  updatePage();
}

function prev() {
  pageNumber = pageNumber - 1;
  if (pageNumber < 0) {
    pageNumber = pageInfo.length - 1;
  }
  updatePage();
}

function updatePage() {
  tagEl.innerHTML = pageInfo[pageNumber].copy;
  backgroundEl.style.backgroundColor = pageInfo[pageNumber].background;
  circleEl.style.backgroundColor = pageInfo[pageNumber].circle;
}

function random() {
  pageNumber = Math.floor(Math.random() * 4);
  updatePage();
}
