
### Refer to the image below:

<br/>
<div style="text-align: center;">
    <img src="https://assets.ccbp.in/frontend/content/react-js/cryptocurrency-tracker-output.gif" alt="cryptocurrency-output" style="max-width:70%;box-shadow:0 2.8px 2.2px rgba(0, 0, 0, 0.12)">
</div>
<br/>

### Design Files

<details>
<summary>Click to view</summary>

- [Extra Small (Size < 576px) and Small (Size >= 576px)](https://assets.ccbp.in/frontend/content/react-js/cryptocurrency-sm-success-output.png)
- [Medium (Size >= 768px), Large (Size >= 992px) and Extra Large (Size >= 1200px)](https://assets.ccbp.in/frontend/content/react-js/cryptocurrency-lg-success-output.png)

</details>
# Cryptocurrency Tracker

A dynamic, real-time Cryptocurrency Tracker application built with React. The application fetches current cryptographic market data and provides a clean, modern interface for tracking popular digital currencies, their current values in USD, and their values in Euros.

---

## 🚀 Tech Stack

* **Frontend Library:** React.js (Functional Components, Hooks)
* **Styling:** Custom CSS3 (Flexbox for responsive layouts)
* **Data Fetching:** Fetch API / Async-Await
* **Icons & Assets:** Crypto currency official branding logos via external APIs
* **Package Manager:** pnpm / npm
* **Environment:** Node.js

---

## ✨ Features

* **Real-time Updates:** Fetches and displays live data for top cryptocurrencies.
* **Dual Currency Display:** Tracks and contrasts market valuations instantly in both **USD ($)** and **Euro (€)**.
* **Responsive UI:** Fully optimized design layout that looks great on desktops, tablets, and mobile devices.
* **Clean Architecture:** Modulized component breakdown (`CryptocurrencyTracker`, `CryptocurrenciesList`, and `CryptocurrencyItem`) for optimal scalability and clean code standards.

---

## 🛠️ Folder Structure

```text
cryptoCurrencyTracker/
├── public/
├── src/
│   ├── components/
│   │   ├── CryptocurrenciesList/
│   │   │   ├── index.css
│   │   │   └── index.js
│   │   ├── CryptocurrencyItem/
│   │   │   ├── index.css
│   │   │   └── index.js
│   │   └── CryptocurrencyTracker/
│   │       ├── index.css
│   │       └── index.js
│   ├── App.css
│   ├── App.js
│   └── index.js
├── package.json
└── README.md


