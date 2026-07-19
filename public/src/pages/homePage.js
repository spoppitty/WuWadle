import resonators from "../resonators.js";

const app = document.getElementById("app");

const backgroundImagePath = "/src/assets/bg3.png";

function rgbToCss(color) {
  return `rgb(${color.r}, ${color.g}, ${color.b})`;
}

function getAverageColorFromImage(imagePath) {
  return new Promise((resolve, reject) => {
    const image = new Image();
    image.crossOrigin = "anonymous";
    image.src = imagePath;

    image.onload = () => {
      const canvas = document.createElement("canvas");
      const context = canvas.getContext("2d");

      const sampleWidth = 50;
      const sampleHeight = 50;

      canvas.width = sampleWidth;
      canvas.height = sampleHeight;

      context.drawImage(image, 0, 0, sampleWidth, sampleHeight);

      const imageData = context.getImageData(0, 0, sampleWidth, sampleHeight);
      const pixels = imageData.data;

      let r = 0;
      let g = 0;
      let b = 0;
      let count = 0;

      for (let i = 0; i < pixels.length; i += 4) {
        r += pixels[i];
        g += pixels[i + 1];
        b += pixels[i + 2];
        count++;
      }

      resolve({
        r: Math.floor(r / count),
        g: Math.floor(g / count),
        b: Math.floor(b / count),
      });
    };

    image.onerror = reject;
  });
}

async function setAutomaticBackgroundTheme() {
  try {
    const averageColor = await getAverageColorFromImage(backgroundImagePath);

    document.documentElement.style.setProperty(
      "--page-bg-image",
      `url('${backgroundImagePath}')`
    );

    document.documentElement.style.setProperty(
      "--page-bg-color",
      rgbToCss(averageColor)
    );
  } catch (error) {
    console.error("Could not create automatic background theme:", error);
  }
}

setAutomaticBackgroundTheme();

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
  <main class="home-page">
    <section class="hero-section">
      <div class="logo-wrap">
        <img src="/src/assets/logo1.png" class="page-logo" alt="WuWadle Logo">
      </div>

      <div class="hero-subtitle">
        <span></span>
        <p>Guess Today's Resonator</p>
        <span></span>
      </div>

      <div class="guess-input-wrapper" id="guessInputWrapper">
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

        <button class="add-guess-button" id="addGuessButton" aria-label="Add guess">
          +
        </button>
      </div>
    </section>

    <section class="resonator-list">
      <table class="resonator-table">
        <thead>
          <tr>
            <th>
              <div class="table-heading">
                <span class="heading-icon">✦</span>
                <span>Resonator</span>
              </div>
            </th>

            <th>
              <div class="table-heading">
                <span class="heading-icon">✧</span>
                <span>Gender</span>
              </div>
            </th>

            <th>
              <div class="table-heading">
                <span class="heading-icon">◈</span>
                <span>Element</span>
              </div>
            </th>

            <th>
              <div class="table-heading">
                <span class="heading-icon">⚔</span>
                <span>Weapon Type</span>
              </div>
            </th>

            <th>
              <div class="table-heading">
                <span class="heading-icon">✶</span>
                <span>First Appearance</span>
              </div>
            </th>

            <th>
              <div class="table-heading">
                <span class="heading-icon">✦</span>
                <span>Rarity</span>
              </div>
            </th>

            <th>
              <div class="table-heading">
                <span class="heading-icon">◎</span>
                <span>Release Year</span>
              </div>
            </th>
          </tr>
        </thead>

        <tbody id="resonatorTableBody"></tbody>
      </table>

      <div class="win-message" id="winMessage">
        Congratulations, you guessed the Resonator!
      </div>
    </section>

    <div class="bottom-brand">
      <span></span>
      <p>Wuthering Waves</p>
      <span></span>
    </div>
  </main>

  <div class="info-menu" id="infoMenu">
    <p>
      Guess the daily resonator using clues like element, weapon type,
      gender, region, rarity, and release year.
    </p>
  </div>

  <button class="info-button" id="infoButton">i</button>
`;
/* app.innerHTML = `
  <main>
    <div> 
      <img src="/src/assets/logo1.png" class = "page-logo" alt="Website Logo">
    </div>

    <div class="guess-box">
      <div class="guess-title">Guess Today's Resonator</div>
      <div class="guess-subtitle">Type your guess below</div>
    </div>

    <div class="guess-input-wrapper" id="guessInputWrapper">
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

      <div class="win-message" id="winMessage">
        Congratulations, you guessed the Resonator!
      </div>
    </section>
  </main>

  <div class="info-menu" id="infoMenu">
    <p>
      Guess the daily resonator using clues like element, weapon type,
      gender, region, rarity, and release year.
    </p>
  </div>

  <button class="info-button" id="infoButton">i</button>

`; */

// Create the Splash Game button
const splashGameButton = document.createElement("button");

splashGameButton.type = "button";
splashGameButton.id = "splashGameButton";
splashGameButton.className = "splash-game-button";
splashGameButton.textContent = "S";
splashGameButton.title = "Play Splash Game";

splashGameButton.addEventListener("click", async () => {
  try {
    const splashGameModule = await import("./splashGame.js");
    splashGameModule.renderSplashGame();
  } catch (error) {
    console.error("Could not load Splash Game:", error);
  }
});

const mainElement = app.querySelector("main");
mainElement.appendChild(splashGameButton);

// info button
const infoButton = document.getElementById("infoButton");
const infoMenu = document.getElementById("infoMenu");

infoButton.addEventListener("click", () => {
  infoMenu.classList.toggle("show");
});

// guess resonator button
const addGuessButton = document.getElementById("addGuessButton");
const resonatorTableBody = document.getElementById("resonatorTableBody");
const guessInputWrapper = document.getElementById("guessInputWrapper");
const winMessage = document.getElementById("winMessage");

const guessInput = document.getElementById("guessInput");
const searchResults = document.getElementById("searchResults");

// hide win message when the page first loads
winMessage.classList.remove("show");
winMessage.style.display = "none";

let selectedResonator = null;

let guessedResonators = [];

function showSearchResults(searchText) {
  searchResults.innerHTML = "";

  if (searchText.trim() === "") {
    searchResults.classList.remove("show");
    return;
  }

  const search = searchText.trim().toLowerCase();

  const matchingResonators = resonators
  .filter((resonator) =>
    resonator.name.toLowerCase().startsWith(search) &&
    !guessedResonators.includes(resonator.name)
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
      submitGuess();
    });

    searchResults.appendChild(resultItem);
  });

  searchResults.classList.add("show");
}

guessInput.addEventListener("input", () => {
  showSearchResults(guessInput.value);
});

guessInput.addEventListener("keydown", (event) => {
  if (event.key === "Enter") {
    event.preventDefault();
    submitGuess();
  }
});

document.addEventListener("click", (event) => {
  if (!event.target.closest(".search-area")) {
    searchResults.innerHTML = "";
    searchResults.classList.remove("show");
  }
});

function submitGuess() {
  const guessName = guessInput.value.trim();

  const guessedResonator =
    selectedResonator ||
    resonators.find(
      (resonator) =>
        resonator.name.toLowerCase() === guessName.toLowerCase()
    );

  if (!guessedResonator) {
    // alert("Please select a valid resonator.");
    return;
  }

  if (guessedResonators.includes(guessedResonator.name)) {
    // alert("You already guessed this resonator."); 
    guessInput.value = "";
    selectedResonator = null;
    searchResults.innerHTML = "";
    searchResults.classList.remove("show");
    return;
  }

  const newRow = document.createElement("tr");

newRow.innerHTML = `
  <td class="portrait-cell">
    <div class="portrait-frame">
      <img
        src="${guessedResonator.icon}"
        alt="${guessedResonator.name}"
        class="resonator-img"
      >
    </div>
  </td>

  <td class="${getMatchClass(guessedResonator.gender, targetResonator.gender)}">
    <div class="trait-cell">
      <img
        src="${guessedResonator.genderIcon}"
        alt="${guessedResonator.gender}"
        class="trait-emblem"
      >
      <span>${guessedResonator.gender}</span>
    </div>
  </td>

  <td class="${getMatchClass(guessedResonator.element, targetResonator.element)}">
    <div class="trait-cell">
      <img
        src="${guessedResonator.elementIcon}"
        alt="${guessedResonator.element}"
        class="trait-emblem"
      >
      <span>${guessedResonator.element}</span>
    </div>
  </td>

  <td class="${getMatchClass(guessedResonator.weaponType, targetResonator.weaponType)}">
    <div class="trait-cell">
      <img
        src="${guessedResonator.weaponIcon}"
        alt="${guessedResonator.weaponType}"
        class="trait-emblem"
      >
      <span>${guessedResonator.weaponType}</span>
    </div>
  </td>

  <td class="${getMatchClass(guessedResonator.firstAppearance, targetResonator.firstAppearance)}">
    <div class="trait-cell">
      <img
        src="${guessedResonator.regionIcon}"
        alt="${guessedResonator.firstAppearance}"
        class="trait-emblem"
      >
      <span>${guessedResonator.firstAppearance}</span>
    </div>
  </td>

  <td class="${getMatchClass(guessedResonator.rarity, targetResonator.rarity)}">
    <div class="trait-cell">
      <img
        src="${guessedResonator.rarityIcon}"
        alt="${guessedResonator.rarity}-Star"
        class="trait-emblem"
      >
      <span>${guessedResonator.rarity}-Star</span>
    </div>
  </td>

  <td class="${getMatchClass(guessedResonator.releaseYear, targetResonator.releaseYear)}">
    <div class="trait-cell year-cell">
      <span>${guessedResonator.releaseYear}</span>
    </div>
  </td>
`;
  /* newRow.innerHTML = `
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
  `; */

  resonatorTableBody.prepend(newRow);
  guessedResonators.push(guessedResonator.name);

  if (guessedResonator.name === targetResonator.name) {
    guessInputWrapper.style.display = "none";
    searchResults.innerHTML = "";
    searchResults.classList.remove("show");

    winMessage.style.display = "block";
    winMessage.classList.add("show");
  }

  guessInput.value = "";
  selectedResonator = null;
  searchResults.innerHTML = "";
  searchResults.classList.remove("show");
}

addGuessButton.addEventListener("click", submitGuess);
/*
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

  if (guessedResonators.includes(guessedResonator.name)) {
    alert("You already guessed this resonator.");
    guessInput.value = "";
    selectedResonator = null;
    searchResults.innerHTML = "";
    searchResults.classList.remove("show");
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

  guessedResonators.push(guessedResonator.name);

  guessInput.value = "";
  selectedResonator = null;
});
*/