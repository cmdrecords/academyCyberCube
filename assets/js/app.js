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
