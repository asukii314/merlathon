async function fetchGameData() {
  const url = 'https://slay-the-relics.baalorlord.tv/api/v2/game-state/601604206';
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const data = await response.json(); // Or .text() for plain text
    console.log(data);
  } catch (error) {
    console.error("Error fetching data:", error);
  }
}

function getGameData() {
  return await fetchGameData();
}
