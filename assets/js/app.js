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
