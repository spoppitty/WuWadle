import resonators from "../resonators.js";

const app = document.getElementById("app");

app.innerHTML = `
  <main>
    <h1>WuWadle</h1>

    <div class="guess-box">
      <div class="guess-title">Guess Today's Resonator</div>
      <div class="guess-subtitle">Type your guess below</div>
    </div>

    <div class="guess-input-wrapper">
      <input
        type="text"
        class="guess-input"
        placeholder="Enter resonator name..."
      >
    </div>

    <section class="resonator-list">
      ${resonators
        .map(
          (resonator) => `
            <table class="resonator-table">
              <thead>
                <tr>
                  <th>Resonator</th>
                  <th>Element</th>
                  <th>Weapon Type</th>
                  <th>Gender</th>
                  <th>Region</th>
                  <th>Rarity</th>
                  <th>Release Year</th>
                </tr>
              </thead>

              <tbody>
                <tr>
                  <td>
                    <img
                      src="${resonator.name}"
                      alt="${resonator.altName}"
                      class="resonator-img"
                    >
                  </td>
                  <td>${resonator.element}</td>
                  <td>${resonator.weaponType}</td>
                  <td>${resonator.gender}</td>
                  <td>${resonator.region}</td>
                  <td>${resonator.rarity}-Star</td>
                  <td>${resonator.releaseYear}</td>
                </tr>
              </tbody>
            </table>
          `
        )
        .join("")}
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

const infoButton = document.getElementById("infoButton");
const infoMenu = document.getElementById("infoMenu");

infoButton.addEventListener("click", () => {
  infoMenu.classList.toggle("show");
});