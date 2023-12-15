export function home(main) {
    main.innerHTML = `  <div id="home">
                            <h1>Play Parchis!</h1>
                            <p>To start playing parchis press the start button.</p>
                            <button id="start">Start game</button>  <!-- Add listener -->
                        </div>
    `;
    document.querySelector("#start").addEventListener("click", goToGamePage);

}

function goToGamePage() {
    window.location.hash = '#/game';
}