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
