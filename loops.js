// const soccerPlayers = [
//   ["Pele", "Ronaldo", "Messi", "Suarez", "Stevie G"],
//   ["Xavi", "Beckham", "Zidane", "Salah"],
// ];

// // for (let i = 0; i < soccerPlayers.length; i++) {
// //   console.log(soccerPlayers[i]);
// // }

// for (let team of soccerPlayers) {
//   for (let player of team) {
//     console.log(player);
//   }
// }

// // for (let i = 0; i < soccerPlayers.length; i++) {
// //   const row = soccerPlayers[i];
// //   for (let j = 0; j < row.length; j++) {
// //     console.log(row[j]);
// //   }
// // }

// for (let char of "hello world") {
//   console.log(char);
// }

// function isEven(number) {
//   return number % 2 === 0;
// }

// isEven();

const testScores = {
  keenan: 90,
  luke: 70,
  kim: 92,
  marlon: 82,
  nadia: 77,
  dwayne: 65,
  von: 81,
};

for (let person in testScores) {
  console.log(testScores[person]);
}
