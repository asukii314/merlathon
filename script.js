const TWITCH_IDS = {
  vmService: 59817220,
  TerrenceMHS: 26480150,
  asukii: 553300621,
  amaz: 43356746,
  jmac: 1325562072,
};
    
// static placeholder for testing
const CONTESTANTS = [
    'TerrenceMHS',
    'vmService'
];

window.addEventListener('load', () => { 
    fetchGameData();
});

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

            wrapper = document.createElement("div");
            wrapper.className = `decklist-wrapper ${contestant}`;

            header = document.createElement("div");
            header.textContent = contestant;
            header.className = "contestant-header";
            wrapper.appendChild(header);          

            parent = document.createElement("div");
            parent.className = `contestant-decklist ${contestant}`;
            wrapper.appendChild(parent);

  

            for(let card of data.deck) {
                renderCard(card, parent)
            }

            let prevDecklist = document.getElementsByClassName(contestant)
            if(prevDecklist.length > 0) {
                prevDecklist[0].remove();
            }
            rootElem.appendChild(wrapper);

//            console.log(data); // do something with the data!
    
        } catch (error) {
            console.error("Error fetching data:", error);
        }
    }
}

function stripUpgradeInfo(str) {
  return str.split('+')[0];
}

function getUpgradeInfo(str) {
  const index = str.indexOf('+');
  return index !== -1 ? str.slice(index) : '';
}

function getImageUrl(cardID) {
    let stripped = stripUpgradeInfo(cardID)
    if(stripped === cardID) {
        return `https://raw.githubusercontent.com/Spireblight/slay-the-relics/refs/heads/master/assets/sts1/card-images/${stripped.toLowerCase().replaceAll(" ", "")}.png`
    } else {
        return `https://raw.githubusercontent.com/Spireblight/slay-the-relics/refs/heads/master/assets/sts1/card-images/${stripped.toLowerCase().replaceAll(" ", "")}plus1.png`
    }
    
}

function renderCard(cardID, parent) {
    
    card = document.createElement("div");
    card.className = 'card-container';
    // card.textContent = name;

    card.innerHTML =
        `<div class="card-image" style="background-image: url(&quot;${getImageUrl(cardID)}&quot;);"></div>`;

    parent.appendChild(card);

    }