
function createGame(player1,hour,player2){
    return `
    <li>
        <img src="src/bandeiras/icon=${player1}.svg" alt="">
        <strong>${hour}</strong>
        <img src="src/bandeiras/icon=${player2}.svg" alt="">
    </li>
    `;
}

function createCard(date, day, games){
    return `
    <div class="card">
                <h2>${date}<span>${day}</span></h2>
                <ul>
                    ${games}
                </ul>
            </div>
    `;
}

document.querySelector("#app").innerHTML = `
        <header>
            <img src="src/logo.svg" alt="">
        </header>
        <main id="cards">
        ${createCard(
          "20/11",
          "quinta",
          createGame("qatar", "13:00", "ecuador")
        )}
        ${createCard(
          "21/11",
          "sexta",
          createGame("england", "10:00", "iran") +
            createGame("senegal", "13:00", "Netherlands") +
            createGame("united states", "16:00", "wales")
        )}
        ${createCard(
          "22/11",
          "sábado",
          createGame("argentina", "07:00", "saudi arabia") +
            createGame("denmark", "10:00", "tunisia") +
            createGame("mexico", "13:00", "Poland") +
            createGame("France", "16:00", "Australia")
        )}
        </main>
`;