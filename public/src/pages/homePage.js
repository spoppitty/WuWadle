import resonators from "../resonators.js";

const app = document.getElementById("app");

app.innerHTML = `
  <main>
    <h1>WuWadle</h1>
    <h2>Guess Today's Resonator</h2>

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
`;