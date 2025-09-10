function getGameData() {
  var options = {
    method: 'get'
  };
  var url = 'https://slay-the-relics.baalorlord.tv/api/v2/game-state/601604206';
  var response = UrlFetchApp.fetch(url, options);
  var gameData = JSON.parse(response.getContentText()).data;

  console.log(gameData[0])
  return gameData;
}
