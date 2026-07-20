<<<<<<< HEAD
const lineIcons = [
  "assets/images/icons8-c-sharp-logo-100.png",
  "assets/images/icons8-c++-100.png",
  "assets/images/icons8-css-100.png",
  "assets/images/icons8-figma-100.png",
  "assets/images/icons8-html-100.png",
  "assets/images/icons8-javascript-100.png",
  "assets/images/icons8-microsoft-office-2019-100.png",
  "assets/images/icons8-nodejs-100.png",
  "assets/images/icons8-photoshop-100.png",
  "assets/images/icons8-python-100.png",
  "assets/images/icons8-react-100.png",
  "assets/images/icons8-sass-100.png",
  "assets/images/icons8-scratch-100.png",
  "assets/images/icons8-sublime-text-100.png",
  "assets/images/icons8-unity-100.png",
  "assets/images/icons8-unreal-engine-100.png",
  "assets/images/icons8-vs-code-100.png",
];

const track = document.getElementById("sliderTrack");

function createSlides(icons) {
  let slidesHTML = "";
  const doubledIcons = [...icons, ...icons];
  doubledIcons.forEach((src) => {
    slidesHTML += `
                            <div class="slide">
                                <img src="${src}" alt="Иконка" loading="lazy" />
                            </div>
                        `;
  });
  return slidesHTML;
}
track.innerHTML = createSlides(lineIcons);
=======
const durationsBtns = document.querySelectorAll(".durations_stage-duration");
const durationLine = document.querySelector(".process-line_line");
const stageCards = document.querySelectorAll(".process-timeline_stage-card");

const linePositions = ["20%", "50%", "100%"];

for (let i = 0; i < durationsBtns.length; i++) {
  durationsBtns[i].addEventListener("click", () => {
    for (let j = 0; j < durationsBtns.length; j++) {
      durationsBtns[j].classList.remove("durations_active");
      durationsBtns[i].classList.add("durations_active");

      stageCards[j].classList.add("d-none");
      stageCards[i].classList.remove("d-none");
    }
    durationLine.style.width = linePositions[i];
  });
}
>>>>>>> howIsTheTrainingGoingPage
