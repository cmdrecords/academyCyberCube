document.addEventListener("DOMContentLoaded", function () {
  // ----- АНИМАЦИЯ СТАТИСТИКИ -----
  function animateNumbers() {
    const stats = document.querySelectorAll(".stat-number");
    stats.forEach((stat) => {
      const target = parseInt(stat.dataset.count);
      let current = 0;
      const increment = target / 60;
      const timer = setInterval(() => {
        current += increment;
        if (current >= target) {
          current = target;
          clearInterval(timer);
        }
        stat.textContent =
          Math.floor(current) + (stat.dataset.count == 98 ? "%" : "");
      }, 20);
    });
  }
  animateNumbers();

  // ----- АККОРДЕОН -----
  const faqItems = document.querySelectorAll(".faq-item");

  faqItems.forEach((item) => {
    const question = item.querySelector(".faq-question");

    question.addEventListener("click", function () {
      const isActive = item.classList.contains("active");

      // Закрываем все
      faqItems.forEach((other) => {
        other.classList.remove("active");
      });

      // Открываем текущий, если был закрыт
      if (!isActive) {
        item.classList.add("active");
      }
    });
  });

  // Открываем первый вопрос по умолчанию
  if (faqItems.length > 0) {
    faqItems[0].classList.add("active");
  }

  // ----- КАТЕГОРИИ -----
  const categoryBtns = document.querySelectorAll(".category-btn");
  const allItems = document.querySelectorAll(".faq-item");

  categoryBtns.forEach((btn) => {
    btn.addEventListener("click", function () {
      // Убираем активные классы
      categoryBtns.forEach((b) => b.classList.remove("active"));
      this.classList.add("active");

      const category = this.dataset.category;

      allItems.forEach((item) => {
        if (category === "all" || item.dataset.category === category) {
          item.style.display = "";
        } else {
          item.style.display = "none";
        }
      });
    });
  });
});

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

const coords = [45.112056, 38.961551];

const map = L.map("map", { attributionControl: false }).setView(coords, 20);

L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
  attribution: "© OpenStreetMap contributors",
}).addTo(map);

const customIcon = L.divIcon({
  className: "pulsating-marker",
  html: `<div style="
                background: #1a5fb4;
                width: 24px;
                height: 24px;
                border-radius: 50% 50% 50% 0;
                transform: rotate(-45deg);
                border: 3px solid white;
                box-shadow: 0 4px 15px rgba(26, 95, 180, 0.5);
            "></div>`,
  iconSize: [24, 24],
  iconAnchor: [12, 24],
  popupAnchor: [0, -30],
});

L.marker(coords, { icon: customIcon })
  .addTo(map)
  .bindPopup("📍 <b>улица им. Мурата Ахеджака, 10А</b><br />Краснодар, Россия")
  .openPopup();

L.circle(coords, {
  radius: 25,
  color: "#1a5fb4",
  weight: 2,
  opacity: 0.3,
  fillColor: "#1a5fb4",
  fillOpacity: 0.1,
}).addTo(map);

setTimeout(() => {
  map.invalidateSize();
}, 300);

window.addEventListener("resize", () => {
  map.invalidateSize();
});

function changeImage(img, newSrc) {
  img.style.opacity = "0";

  setTimeout(() => {
    img.src = newSrc;
    img.style.opacity = "1";
  }, 200);
}

const formInputs = document.querySelectorAll(".form_input-container");
const nameIcon = document.querySelector(".name-icon");
const phoneIcon = document.querySelector(".phone-icon");

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

  console.log(name, phone);

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
