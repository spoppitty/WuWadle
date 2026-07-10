import resonators from "../resonators.js";

const app = document.getElementById("app");

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
      <input
        type="text"
        class="guess-input"
        id="guessInput"
        placeholder="Enter resonator name..."
      >

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
            <th>Region</th>
            <th>Rarity</th>
            <th>Release Year</th>
          </tr>
        </thead>

        <tbody id="resonatorTableBody">
          ${resonators
            .map(
              (resonator) => `
                <tr>
                  <td>
                    <img
                      src="${resonator.icon}"
                      alt="${resonator.name}"
                      class="resonator-img"
                    >
                  </td>
                  <td>${resonator.gender}</td>
                  <td>${resonator.element}</td>
                  <td>${resonator.weaponType}</td>
                  <td>${resonator.region}</td>
                  <td>${resonator.rarity}-Star</td>
                  <td>${resonator.releaseYear}</td>
                </tr>
              `
            )
            .join("")}
        </tbody>
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

addGuessButton.addEventListener("click", () => {
  const newRow = document.createElement("tr");

  newRow.innerHTML = `
    <td>New Guess</td>
    <td>?</td>
    <td>?</td>
    <td>?</td>
    <td>?</td>
    <td>?</td>
    <td>?</td>
  `;

  resonatorTableBody.prepend(newRow);
});