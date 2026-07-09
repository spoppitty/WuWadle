const app = document.getElementById("app");

const resonators = [
  {
    name: "/src/assets/chixiaIcon.png",
    altName: "Chixia",
    element: "Fusion",
    weaponType: "Pistols",
    gender: "Female",
    region: "Huanglong",
    rarity: 4,
    releaseYear: 2024
  },
  {
    name: "/src/assets/jiyanIcon.png",
    altName: "Jiyan",
    element: "Aero",
    weaponType: "Broadblade",
    gender: "Male",
    region: "Huanglong",
    rarity: 5,
    releaseYear: 2024
  },
  {
    name: "/src/assets/yinlinIcon.png",
    altName: "Yinlin",
    element: "Electro",
    weaponType: "Rectifier",
    gender: "Female",
    region: "Huanglong",
    rarity: 5,
    releaseYear: 2024
  }
];

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