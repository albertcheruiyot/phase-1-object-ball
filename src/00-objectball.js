function gameObject() {
    return {
      home: {
        teamName: "Brooklyn Nets",
        colors: ["Black", "White"],
        players: {
          "Alan Anderson": {
            number: 0,
            shoe: 16,
            points: 22,
            rebounds: 12,
            assists: 12,
            steals: 3,
            blocks: 1,
            slamDunks: 1
          },
          "Reggie Evans": {
            number: 30,
            shoe: 14,
            points: 12,
            rebounds: 12,
            assists: 12,
            steals: 12,
            blocks: 12,
            slamDunks: 7
          },
          "Brook Lopez": {
            number: 11,
            shoe: 17,
            points: 17,
            rebounds: 19,
            assists: 10,
            steals: 3,
            blocks: 1,
            slamDunks: 15
          },
          "Mason Plumlee": {
            number: 1,
            shoe: 19,
            points: 26,
            rebounds: 12,
            assists: 6,
            steals: 3,
            blocks: 8,
            slamDunks: 5
          },
          "Jason Terry": {
            number: 31,
            shoe: 15,
            points: 19,
            rebounds: 2,
            assists: 2,
            steals: 4,
            blocks: 11,
            slamDunks: 1
          }
        }
      },
      away: {
        teamName: "Charlotte Hornets",
        colors: ["Turquoise", "Purple"],
        players: {
          "Jeff Adrien": {
            number: 4,
            shoe: 18,
            points: 10,
            rebounds: 1,
            assists: 1,
            steals: 2,
            blocks: 7,
            slamDunks: 2
          },
          "Bismack Biyombo": {
            number: 0,
            shoe: 16,
            points: 12,
            rebounds: 4,
            assists: 7,
            steals: 7,
            blocks: 15,
            slamDunks: 10
          },
          "DeSagna Diop": {
            number: 2,
            shoe: 14,
            points: 24,
            rebounds: 12,
            assists: 12,
            steals: 4,
            blocks: 5,
            slamDunks: 5
          },
          "Ben Gordon": {
            number: 8,
            shoe: 15,
            points: 33,
            rebounds: 3,
            assists: 2,
            steals: 1,
            blocks: 1,
            slamDunks: 0
          },
          "Brendan Haywood": {
            number: 33,
            shoe: 15,
            points: 6,
            rebounds: 12,
            assists: 12,
            steals: 22,
            blocks: 5,
            slamDunks: 12
          }
        }
      }
    };
  }

  console.log(gameObject());

// search in the away team
function numPointsScored(playerName){
  for (let player in gameObject().home.players) {
    if (player === playerName) {
      return gameObject().home.players[player].points;
    }
  }

  // search in the away team
  for (let player in gameObject().away.players) {
    if (player === playerName) {
      return gameObject().away.players[player].points;
    }
  }

}
// For example this player has 22
console.log(`POINTS: ${numPointsScored("Alan Anderson")}`);

function shoeSize(playerName){
  for (let player in gameObject().home.players) {
    if (player === playerName) {
      return gameObject().home.players[player].shoe;
    }
  }

  // search in the away team
  for (let player in gameObject().away.players) {
    if (player === playerName) {
      return gameObject().away.players[player].shoe;
    }
  }

}
console.log(`SIZE: ${shoeSize("Alan Anderson")}`);

function teamColors(teamName){
  const game = gameObject();

  if(game.home.teamName === teamName){
    return game.home.colors;
  } else if(game.away.teamName === teamName){
    return game.away.colors;
  }
}

console.log(teamColors("Charlotte Hornets"));

function teamNames(){
  const game = gameObject();

  const names=[];

  names.push(game.home.teamName);
  names.push(game.away.teamName);

  return names;
}

console.log(teamNames());

function playerNumbers(teamName){
  const game = gameObject();

  const playerNumbers=[];

if(game.home.teamName == teamName){
  for(const player in game.home.players){
    playerNumbers.push(game.home.players[player].number);
  }
}else if(game.away.teamName == teamName){
  for(const player in game.away.players){
    playerNumbers.push(game.away.players[player].number);
  }
}

  return playerNumbers;
}

console.log(playerNumbers("Charlotte Hornets"));

function playerStats(playerName){
  const game = gameObject();

  for(const player in game.home.players){
    if(player === playerName){
      return game.home.players[player];
    }
  }
  for(const player in game.away.players){
    if(player === playerName){
      return game.away.players[player];
    }
  }
}
console.log(playerStats("Charlotte Hornets"));

function bigShoeRebounds(){
  const game = gameObject();
  let largestSize = -Infinity;

  for(const player in game.home.players){
    const shoeSize = game.home.players[player].shoe;

    if(shoeSize>largestSize){
      largestSize = shoeSize;
      playerWithLargestShoe = game.home.players[player];
      getReounds();
    }
  }
  for(const player in game.away.players){
    const shoeSize = game.away.players[player].shoe;
    if(shoeSize>largestSize){
      largestSize = shoeSize;
      playerWithLargestShoe = game.away.players[player];
      getReounds();
    }
  }

}

function getReounds(){
  return playerWithLargestShoe.rebounds;
}