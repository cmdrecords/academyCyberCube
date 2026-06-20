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
