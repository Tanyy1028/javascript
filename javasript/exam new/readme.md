

Here's a **README.md** file for your project:  

```markdown
# 🌍 Countries Explorer with Favorites

This is a simple web application that fetches data from the **REST Countries API** and allows users to:

- View country details (name, flag, and capital).
- Search for countries in real-time.
- Mark countries as **favorites**.
- Persist favorites in **localStorage** so they are available even after page refresh.

---
## VIDEO









## 🚀 Features
1. **Fetch Countries:**  
   Uses the REST Countries API to fetch data:  
   `https://restcountries.com/v3.1/all?fields=name,capital,flags,currencies`

2. **Real-time Search:**  
   Filters countries dynamically as the user types in the search bar.

3. **Favorites Section:**  
   - Users can add countries to the favorites list.
   - Users can remove countries from favorites.
   - Favorites are saved in `localStorage`.

4. **Responsive UI:**  
   Countries are displayed in a grid, with a separate section for favorites.

---

## 📂 Project Structure
```
project/
│
├── index.html       # Main HTML page
├── style.css        # Styles for the page
├── script.js        # JavaScript logic (Fetch API, search, favorites)
└── README.md        # Project documentation
```

---

## 🛠 Technologies Used
- **HTML5**
- **CSS3**
- **JavaScript (Vanilla JS)**
- **REST Countries API**

---

## 📜 Code Overview
### Main Functions:
- **`fetchCountries()`** – Fetches all country data from the API.
- **`displayCountries(countryArray)`** – Renders the list of countries.
- **`addToFavorites(countryName)`** – Adds a country to the favorites list.
- **`removeFromFavorites(countryName)`** – Removes a country from favorites.
- **`displayFavorites()`** – Displays the favorite countries from localStorage.
- **`saveFavorites()`** – Saves the favorites array to localStorage.

---

## ▶ How to Run
1. Clone this repository:
   ```bash
   git clone https://github.com/your-username/countries-favorites.git
   ```
2. Open `index.html` in your browser.
3. Start searching and marking your favorite countries!

---

## 🌐 API Reference
- **REST Countries API:**  
  [https://restcountries.com/](https://restcountries.com/)

---

## 📸 Screenshot
(Add a screenshot of your app here)

---

## 📜 License
This project is open source and available under the [MIT License](LICENSE).
```

