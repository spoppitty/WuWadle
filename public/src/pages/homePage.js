import resonators from "../resonators.js";

const app = document.getElementById("app");

// picking a target resonator on each refresh
const targetResonator =
  resonators[Math.floor(Math.random() * resonators.length)];

// debug
console.log("Target resonator:", targetResonator);

// check if the guessed resonator trait matches the target resonator's trait
function getMatchClass(resonatorValue, targetValue) {
  return resonatorValue === targetValue ? "match" : "no-match";
}

app.innerHTML = `
  <main>
    <div> 
      <img src="/src/assets/logo1.png" class = "page-logo" alt="Website Logo">
    </div>

    <div class="guess-box">
      <div class="guess-title">Guess Today's Resonator</div>
      <div class="guess-subtitle">Type your guess below</div>
    </div>

    <div class="guess-input-wrapper">
      <div class="search-area">
        <input
          type="text"
          class="guess-input"
          id="guessInput"
          placeholder="Enter resonator name..."
          autocomplete="off"
        >

        <div class="search-results" id="searchResults"></div>
      </div>

      <button class="add-guess-button" id="addGuessButton">+</button>
    </div>

    <section class="resonator-list">
      <table class="resonator-table">
        <thead>
          <tr>
            <th>Resonator</th>
            <th>Gender</th>
            <th>Element</th>
            <th>Weapon Type</th>
            <th>First Appearance</th>
            <th>Rarity</th>
            <th>Release Year</th>
          </tr>
        </thead>

        <tbody id="resonatorTableBody"></tbody>
      </table>
    </section>
  </main>

  <div class="info-menu" id="infoMenu">
    <p>
      Guess the daily resonator using clues like element, weapon type,
      gender, region, rarity, and release year.
    </p>
  </div>

  <button class="info-button" id="infoButton">i</button>

`;

// info button
const infoButton = document.getElementById("infoButton");
const infoMenu = document.getElementById("infoMenu");

infoButton.addEventListener("click", () => {
  infoMenu.classList.toggle("show");
});

// guess resonator button
const addGuessButton = document.getElementById("addGuessButton");
const resonatorTableBody = document.getElementById("resonatorTableBody");

const guessInput = document.getElementById("guessInput");
const searchResults = document.getElementById("searchResults");

let selectedResonator = null;

function showSearchResults(searchText) {
  searchResults.innerHTML = "";

  if (searchText.trim() === "") {
    searchResults.classList.remove("show");
    return;
  }

  const search = searchText.trim().toLowerCase();

  const matchingResonators = resonators
    .filter((resonator) =>
      resonator.name.toLowerCase().startsWith(search)
    )
    .sort((a, b) => a.name.localeCompare(b.name));

  if (matchingResonators.length === 0) {
    searchResults.innerHTML = `
      <div class="search-result-empty">No resonators found</div>
    `;
    searchResults.classList.add("show");
    return;
  }

  matchingResonators.forEach((resonator) => {
    const resultItem = document.createElement("button");
    resultItem.type = "button";
    resultItem.className = "search-result-item";

    resultItem.innerHTML = `
      <img
        src="${resonator.icon}"
        alt="${resonator.name}"
        class="search-result-icon"
      >
      <span>${resonator.name}</span>
    `;

    resultItem.addEventListener("click", () => {
      guessInput.value = resonator.name;
      selectedResonator = resonator;

      searchResults.innerHTML = "";
      searchResults.classList.remove("show");
    });

    searchResults.appendChild(resultItem);
  });

  searchResults.classList.add("show");
}

guessInput.addEventListener("input", () => {
  showSearchResults(guessInput.value);
});

document.addEventListener("click", (event) => {
  if (!event.target.closest(".search-area")) {
    searchResults.innerHTML = "";
    searchResults.classList.remove("show");
  }
});

addGuessButton.addEventListener("click", () => {
  const guessName = guessInput.value.trim();

  const guessedResonator =
    selectedResonator ||
    resonators.find(
      (resonator) =>
        resonator.name.toLowerCase() === guessName.toLowerCase()
    );

  if (!guessedResonator) {
    alert("Please select a valid resonator.");
    return;
  }

  const newRow = document.createElement("tr");

  newRow.innerHTML = `
    <td>
      <img
        src="${guessedResonator.icon}"
        alt="${guessedResonator.name}"
        class="resonator-img"
      >
    </td>

    <td class="${getMatchClass(guessedResonator.gender, targetResonator.gender)}">
      ${guessedResonator.gender}
    </td>

    <td class="${getMatchClass(guessedResonator.element, targetResonator.element)}">
      ${guessedResonator.element}
    </td>

    <td class="${getMatchClass(guessedResonator.weaponType, targetResonator.weaponType)}">
      ${guessedResonator.weaponType}
    </td>

    <td class="${getMatchClass(guessedResonator.firstAppearance, targetResonator.firstAppearance)}">
      ${guessedResonator.firstAppearance}
    </td>

    <td class="${getMatchClass(guessedResonator.rarity, targetResonator.rarity)}">
      ${guessedResonator.rarity}-Star
    </td>

    <td class="${getMatchClass(guessedResonator.releaseYear, targetResonator.releaseYear)}">
      ${guessedResonator.releaseYear}
    </td>
  `;

  resonatorTableBody.prepend(newRow);

  guessInput.value = "";
  selectedResonator = null;
});