const TWITCH_IDS = {
  vmService: 59817220,
  TerrenceMHS: 26480150,
  asukii: 553300621,
  amaz: 43356746,
};
    
// static placeholder for testing
const CONTESTANTS = [
    'asukii',
    'amaz'
];

async function fetchGameData() {
    let rootElem = document.getElementById("deck-container");
    for(let contestant of CONTESTANTS) {
        let id = TWITCH_IDS[contestant];
        const url = `https://slay-the-relics.baalorlord.tv/api/v2/game-state/${id}`;
        try {
            const response = await fetch(url);
            if (!response.ok) {
              throw new Error(`HTTP error! status: ${response.status}`);
            }
            const data = await response.json();

            parent = document.createElement("div");
            parent.className = `contestant-decklist ${contestant}`;
            

            header = document.createElement("div");
            header.textContent = contestant;
            header.className = "contestant-header";
            parent.appendChild(header);            

            for(let card of data.deck) {
                renderCard(card, parent)
            }

            let prevDecklist = document.getElementsByClassName(contestant)
            if(prevDecklist.length > 0) {
                prevDecklist[0].remove();
            }
            rootElem.appendChild(parent);

            console.log(data); // do something with the data!
    
        } catch (error) {
            console.error("Error fetching data:", error);
        }
    }
}



function renderCard(cardName, parent) {
    
    card = document.createElement("div");
    card.className = 'card-container';
    // card.textContent = name;

    card.innerHTML = `
        <div class="card test">
            ${cardName}
        </div>`;

    parent.appendChild(card);

    }