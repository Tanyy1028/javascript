const API_URL = "https://restcountries.com/v3.1/all?fields=name,capital,flags,currencies";

const countryListEl = document.getElementById("country-list");
const favoriteListEl = document.getElementById("favorite-list");
const searchInput = document.getElementById("search");



let countries = [];
let favorites = JSON.parse(localStorage.getItem("favorites")) || [];

async function fetchCountries() {
  try {
    const res = await fetch(API_URL);
    countries = await res.json();
    displayCountries(countries);
    displayFavorites();
  } catch (error) {
    console.error("Error fetching countries:", error);
  }
}

function displayCountries(countryArray) {
  countryListEl.innerHTML = "";
  if (countryArray.length === 0) {
    countryListEl.innerHTML = `<p class="no-results">No countries found.</p>`;
    return;
  }

  countryArray.forEach((country) => {
    const countryEl = document.createElement("div");
    countryEl.classList.add("country");

    countryEl.innerHTML = `
      <div class="details">
        <img src="${country.flags.png}" alt="${country.name.common} flag">
        <div>
          <strong>${country.name.common}</strong><br>
          Capital: ${country.capital ? country.capital[0] : "N/A"}
        </div>
      </div>
      <button onclick="addToFavorites('${country.name.common}')">Favorite</button>
    `;

    countryListEl.appendChild(countryEl);
  });
}


searchInput.addEventListener("input", (e) => {
  const query = e.target.value.toLowerCase();
  const filtered = countries.filter((c) =>
    c.name.common.toLowerCase().includes(query)
  );
  displayCountries(filtered);
});


function addToFavorites(countryName) {
  const country = countries.find((c) => c.name.common === countryName);
  if (!favorites.some((fav) => fav.name.common === countryName)) {
    favorites.push(country);
    saveFavorites();
    displayFavorites();
  }
}


function removeFromFavorites(countryName) {
  favorites = favorites.filter((fav) => fav.name.common !== countryName);
  saveFavorites();
  displayFavorites();
}


function displayFavorites() {
  favoriteListEl.innerHTML = "";
  favorites.forEach((fav) => {
    const favEl = document.createElement("div");
    favEl.classList.add("favorite-item");

    favEl.innerHTML = `
      <div class="details">
        <img src="${fav.flags.png}" alt="${fav.name.common} flag">
        <div>
          <strong>${fav.name.common}</strong><br>
          Capital: ${fav.capital ? fav.capital[0] : "N/A"}
        </div>
      </div>
      <button onclick="removeFromFavorites('${fav.name.common}')">Remove</button>
    `;

    favoriteListEl.appendChild(favEl);
  });
}

function saveFavorites() {
  localStorage.setItem("favorites", JSON.stringify(favorites));
}


fetchCountries();
