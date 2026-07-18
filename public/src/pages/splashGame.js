import resonators from "../resonators.js";

export function renderSplashGame() {
  const app = document.getElementById("app");

  // only get 5 stars
  const fiveStarResonators = resonators.filter(
    (resonator) => resonator.rarity === 5
  );

  // Select a new random target whenever Splash Game is opened.
  const targetResonator =
    fiveStarResonators[
        Math.floor(Math.random() * fiveStarResonators.length)
    ];

  // Keep this temporarily while testing.
  console.log("Splash Game target:", targetResonator);

  app.innerHTML = `
    <main class="splash-game-page">
      <div>
        <img
          src="/src/assets/logo1.png"
          class="page-logo"
          alt="WuWadle logo"
        >
      </div>

      <div class="guess-box">
        <div class="guess-title">Guess Today's Resonator</div>
        <div class="guess-subtitle">
          Identify the Resonator shown below
        </div>
      </div>

      <section class="target-image-box">
        <img
          src="${targetResonator.splashImage}"
          class="target-resonator-image"
          id="targetResonatorImage"
          alt="Mystery Resonator"
          onerror="this.onerror=null; this.src='${targetResonator.icon}';"
        >
      </section>

      <div class="guess-input-wrapper" id="splashGuessInputWrapper">
        <div class="search-area">
          <input
            type="text"
            class="guess-input"
            id="splashGuessInput"
            placeholder="Enter resonator name..."
            autocomplete="off"
          >

          <div
            class="search-results"
            id="splashSearchResults"
          ></div>
        </div>

        <button
          class="add-guess-button"
          id="splashAddGuessButton"
          type="button"
          aria-label="Submit guess"
        >
          +
        </button>
      </div>

      <section class="splash-guess-history">
        <h2 class="splash-guess-history-title">
          Previous Guesses
        </h2>

        <div
          class="splash-guesses-list"
          id="splashGuessesList"
        >
          <p
            class="no-splash-guesses"
            id="noSplashGuesses"
          >
            No guesses yet.
          </p>
        </div>
      </section>

      <div
        class="win-message"
        id="splashWinMessage"
      >
        Congratulations, you guessed the Resonator!
      </div>
    </main>

    <button
      class="splash-back-button"
      id="backToHomeButton"
      type="button"
      title="Back to Classic Game"
      aria-label="Back to Classic Game"
    >
      ←
    </button>
  `;

  const guessInput =
    document.getElementById("splashGuessInput");

  const searchResults =
    document.getElementById("splashSearchResults");

  const addGuessButton =
    document.getElementById("splashAddGuessButton");

  const guessInputWrapper =
    document.getElementById("splashGuessInputWrapper");

  const guessesList =
    document.getElementById("splashGuessesList");

  const noGuessesMessage =
    document.getElementById("noSplashGuesses");

  const winMessage =
    document.getElementById("splashWinMessage");

  const backToHomeButton =
    document.getElementById("backToHomeButton");
  
  const targetResonatorImage =
  document.getElementById("targetResonatorImage");

  const minimumZoom = 1;
  const maximumZoom = 8;
  const zoomOutPerGuess = 0.65;

  let currentZoom = maximumZoom;

  // Pick a random part of the image.
  // Keeping the values between 20% and 80% avoids focusing too closely
  // on the very edge of the artwork.
  const randomFocusX =
    Math.floor(Math.random() * 61) + 20;

  const randomFocusY =
    Math.floor(Math.random() * 61) + 20;

  function updateSplashImageZoom() {
    targetResonatorImage.style.transformOrigin =
      `${randomFocusX}% ${randomFocusY}%`;

    targetResonatorImage.style.transform =
      `scale(${currentZoom})`;
  }

  function zoomOutSplashImage() {
    currentZoom = Math.max(
      minimumZoom,
      currentZoom - zoomOutPerGuess
    );

    updateSplashImageZoom();
  }

  function initializeSplashImageZoom() {
    // Do not animate the initial zoom.
    targetResonatorImage.style.transition = "none";

    targetResonatorImage.style.transformOrigin =
      `${randomFocusX}% ${randomFocusY}%`;

    targetResonatorImage.style.transform =
      `scale(${currentZoom})`;

    // Force the browser to apply the initial zoom before revealing it.
    void targetResonatorImage.offsetWidth;

    targetResonatorImage.classList.add("is-ready");

    // Restore animation for later guesses.
    requestAnimationFrame(() => {
      targetResonatorImage.style.transition =
        "transform 0.7s ease, transform-origin 0.7s ease";
    });
  }

  targetResonatorImage.addEventListener(
    "load",
    initializeSplashImageZoom
  );

  if (targetResonatorImage.complete) {
    initializeSplashImageZoom();
  }

  let selectedResonator = null;
  const guessedResonators = [];

  function closeSearchResults() {
    searchResults.innerHTML = "";
    searchResults.classList.remove("show");
  }

  function showSearchResults(searchText) {
    searchResults.innerHTML = "";

    const search = searchText.trim().toLowerCase();

    if (search === "") {
      searchResults.classList.remove("show");
      return;
    }

    const matchingResonators = fiveStarResonators
      .filter((resonator) => {
        const startsWithSearch =
          resonator.name.toLowerCase().startsWith(search);

        const hasNotBeenGuessed =
          !guessedResonators.includes(resonator.name);

        return startsWithSearch && hasNotBeenGuessed;
      })
      .sort((first, second) =>
        first.name.localeCompare(second.name)
      );

    if (matchingResonators.length === 0) {
      searchResults.innerHTML = `
        <div class="search-result-empty">
          No resonators found
        </div>
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

  function addGuessToHistory(guessedResonator) {
    noGuessesMessage?.remove();

    const guessCard = document.createElement("div");

    const isCorrectGuess =
      guessedResonator.name === targetResonator.name;

    guessCard.className = isCorrectGuess
      ? "splash-guess-card correct"
      : "splash-guess-card incorrect";

    guessCard.innerHTML = `
      <img
        src="${guessedResonator.icon}"
        alt="${guessedResonator.name}"
        class="splash-guess-icon"
      >

      <span class="splash-guess-name">
        ${guessedResonator.name}
      </span>
    `;

    // Newest guess appears first.
    guessesList.prepend(guessCard);
  }

  function submitGuess() {
    const guessName = guessInput.value.trim();

    const guessedResonator =
      selectedResonator ||
      fiveStarResonators.find(
        (resonator) =>
          resonator.name.toLowerCase() ===
          guessName.toLowerCase()
      );

    if (!guessedResonator) {
      return;
    }

    if (guessedResonators.includes(guessedResonator.name)) {
      guessInput.value = "";
      selectedResonator = null;
      closeSearchResults();
      return;
    }

    guessedResonators.push(guessedResonator.name);
    addGuessToHistory(guessedResonator);
    zoomOutSplashImage();

    const isCorrectGuess =
      guessedResonator.name === targetResonator.name;

    if (isCorrectGuess) {
      currentZoom = minimumZoom;
      updateSplashImageZoom();
      
      guessInputWrapper.style.display = "none";
      winMessage.classList.add("show");
      winMessage.style.display = "block";
      closeSearchResults();
    }

    guessInput.value = "";
    selectedResonator = null;
    closeSearchResults();

    if (!isCorrectGuess) {
      guessInput.focus();
    }
  }

  guessInput.addEventListener("input", () => {
    selectedResonator = null;
    showSearchResults(guessInput.value);
  });

  guessInput.addEventListener("keydown", (event) => {
    if (event.key === "Enter") {
      event.preventDefault();
      submitGuess();
    }
  });

  addGuessButton.addEventListener("click", submitGuess);

  document.addEventListener(
    "click",
    function closeSplashSearch(event) {
      if (!event.target.closest(".search-area")) {
        closeSearchResults();
      }
    }
  );

  backToHomeButton.addEventListener("click", () => {
    window.location.reload();
  });

  guessInput.focus();
}