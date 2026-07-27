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

var map = L.map("map", {
  attributionControl: false,
}).setView([45.1121, 38.9616], 16);

L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
  maxZoom: 19,
}).addTo(map);

L.marker([45.1121, 38.9616])
  .addTo(map)
  .bindPopup("ул. им. Мурата Ахеджака, 10А<br>Краснодар")
  .openPopup();
const formInputs = document.querySelectorAll(".input-container_input");
const nameIcon = document.querySelector(".name-icon");
const phoneIcon = document.querySelector(".phone-icon");

function changeImage(img, newSrc) {
  img.style.opacity = "0";

  setTimeout(() => {
    img.src = newSrc;
    img.style.opacity = "1";
  }, 200);
}

formInputs[0].addEventListener("focus", () => {
  changeImage(nameIcon, "assets/images/name-active.png");
});
formInputs[0].addEventListener("blur", () => {
  changeImage(nameIcon, "assets/images/name-unactive.png");
});

formInputs[1].addEventListener("focus", () => {
  changeImage(phoneIcon, "assets/images/phone-active.png");
});
formInputs[1].addEventListener("blur", () => {
  changeImage(phoneIcon, "assets/images/phone-unactive.png");
});

const BOT_TOKEN = "8770173167:AAFsufCD64vRNuvtePu4AhQbIhvr-7MoxEY";
const CHAT_ID = "833477605";

const form = document.getElementById("tgForm");
const statusDiv = document.getElementById("statusMessage");

form.addEventListener("submit", async (e) => {
  e.preventDefault();

  const name = document.getElementById("fullName").value.trim();
  const phone = document.getElementById("phone").value.trim();

  if (!name || !phone) {
    statusDiv.style.display = "block";
    statusDiv.textContent = "Заполните все поля!";
    statusDiv.style.color = "#c1121f";
    return;
  }

  const message = `✅ Новая заявка!\n\n👤 Имя: ${name}\n📞 Телефон: ${phone}`;

  const url = `https://api.telegram.org/bot${BOT_TOKEN}/sendMessage`;

  try {
    statusDiv.textContent = "Отправка...";
    statusDiv.style.color = "#7ef07e";

    const response = await fetch(url, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        chat_id: CHAT_ID,
        text: message,
        parse_mode: "HTML",
      }),
    });

    const data = await response.json();

    if (data.ok) {
      statusDiv.textContent = "Заявка успешно отправлена!";
      statusDiv.style.color = "#7ef07e";
      form.reset();
    } else {
      throw new Error(data.description || "Ошибка при отправке");
    }
  } catch (error) {
    console.error("Ошибка:", error);
    statusDiv.textContent = "Ошибка отправки. Попробуйте позже.";
    statusDiv.style.color = "#c1121f";
  }
});
