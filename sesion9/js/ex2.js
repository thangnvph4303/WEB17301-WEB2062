const game = {
    team1: 'Bayern Munich',
    team1: 'Borrussia Dortmund',
    players: [
        [
            'Neuer',
            'Pavard',
            'Martinez',
            'Alaba',
            'Davies',
            'Kimich',
            'Goretzka',
            'Coman',
            'Muller',
            'Gnarby',
            'Lewandowski',
        ],
        [
            'Burki',
            'Schulz',
            'Hummels',
            'Akanji',
            'Hakimi',
            'Weigl',
            'Wisel',
            'Hazard',
            'Brandt',
            'Sancho',
            'Gotze',
        ],
    ],
    score: '4:0',
    scored: ['Lewandowski', 'Grarby', 'Lewandowski', 'Hummels'],
    date: 'Nov 9th 2037',
    odds: {
        team1: 1.33,
        x: 3.25,
        team2: 6.5,
    },
};

//1
for(const[i, player] of game.scored.entries())
    console.log(`Goals ${i + 1}: ${player}`);


//2
const odds = Object.values(game.odds);
let average = 0;
for (const odd of odds)
average += odd;
average /= odds.length;
console.log(average);

//3
for(const [team, odd] of Object.entries(game.odds)){
    const teamStr = team === 'x' ? 'draw' : `victory ${game[team]}`;
    console.log(`Odd of ${teamStr} ${odd}`);;
}