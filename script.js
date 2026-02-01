const TWITCH_IDS = {
  vmService: 59817220,
  TerrenceMHS: 26480150,
  asukii: 553300621,
  amaz: 43356746,
  jmac_sts: 1325562072,
  Panacea108: 105976794,
  Croven831: 70537980,
  JapaneseExport: 116377450,
  nickysts: 261430360,
  bookshelf2029: 497527623,
  KuroL__: 411907314,
  OnePunMan_: 115770251,
  PrydwenWZ: 36233407,
};


// static placeholder for testing
const CONTESTANTS = {
    ironclad: [
        'jmac_sts',
        'Panacea108',
        'TerrenceMHS'
    ],
    defect: [
        'Croven831',
        'JapaneseExport',
        'nickysts'
    ],
    silent: [
        'bookshelf2029',
        'KuroL__',
        'PrydwenWZ'
    ]
}

const urlParams = new URLSearchParams(window.location.search);

window.addEventListener('load', () => { 
    fetchGameData();
});


async function fetchGameData() {
    let rootElem = document.getElementById("deck-container");
    const char = urlParams.get("character");
    
    if(!CONTESTANTS[char]) {
        document.getElementById('title');
        title.classList.add('hide');
        document.getElementById('refresh');
        refresh.disabled = true;
        return;
    }

    document.getElementById('title');
    title.classList.remove('hide');

    let charbtn = document.getElementById(char);
    charbtn.disabled = true;
    
    for(let contestant of CONTESTANTS[char]) {
        if(!document.getElementsByClassName(`button-${contestant}`).length) {
            let contestantBtn = document.createElement("button");
            contestantBtn.textContent = contestant;
            contestantBtn.className = `contestantBtn button-${contestant} char-inactive`

            contestantBtn.addEventListener("click", function() {
                let allBtns = document.getElementsByClassName('contestantBtn')
                for(let cbtn of allBtns) {
                    cbtn.classList.add('char-inactive');
                }
                let allDecks = document.getElementsByClassName('decklist-wrapper')
                for(let deck of allDecks) {
                    deck.classList.add('char-inactive');
                }
                let activePlayer = document.getElementsByClassName(`button-${contestant}`);
                for(let cbtn of activePlayer) {
                    cbtn.classList.remove('char-inactive');
                }
                console.log(contestant)
                let activeDeck = document.getElementsByClassName(contestant);
                for(let cd of activeDeck) {
                    cd.classList.remove('char-inactive');
                }

            });

            let btn_container = document.getElementById("contestant-btns");
            btn_container.appendChild(contestantBtn);


        }

        let id = TWITCH_IDS[contestant];
        const url = `https://slay-the-relics.baalorlord.tv/api/v2/game-state/${id}`;
        try {
            const response = await fetch(url);
            if (!response.ok) {
              throw new Error(`HTTP error! status: ${response.status}`);
            }
            const data = await response.json();

            wrapper = document.createElement("div");
            wrapper.className = `decklist-wrapper ${contestant} char-inactive`;

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

function redirectToChar(char) {
    console.log("x")
  const url = new URL(window.location.href);

  // 2. Add or update the query parameter
  // Use .set() to replace the value if the key already exists, or add it if not
  // Use .append() if you want multiple parameters with the same key
  url.searchParams.set("character", char);

  // 3. Redirect to the new URL
  window.location.href = url.toString();
}

function stripUpgradeInfo(str) {
    if (Array.isArray(str)) {
         return str[0].split('+')[0];
    }
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