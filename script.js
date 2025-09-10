const TWITCH_IDS = {
  vmService: 59817220,
  TerrenceMHS: 26480150
};
    
async function fetchGameData() {
  const url = 'https://slay-the-relics.baalorlord.tv/api/v2/game-state/601604206'; // static placeholder
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const data = await response.json();
    console.log(data); // do something with the data!
    
  } catch (error) {
    console.error("Error fetching data:", error);
  }
}

