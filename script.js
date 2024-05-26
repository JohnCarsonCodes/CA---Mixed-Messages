const randNum = prop => Math.floor(Math.random() * prop);

let pushups = 1;

let games = [
    {
        name: "Fortnite",
        challenge: ['Get 10 Kills', 'Reach Top 50', 'Get 15 Kills', 'Reach Top 25', 'Get 20 Kills', 'Reach Top 10', 'Finish 1st']
    },
    {
        name: 'Valorant',
        challenge: ['Survive 3 Rounds', 'End With Positive K/D', 'Get First Kill On Any Round', 'Most Kills', 'Least Deaths']
    },
    {
        name: 'Call of Duty',
        challenge: ['Win Game', 'Most Kills', 'Call In High Killstreak', 'Best K/D', 'Least Deaths', 'Final Kill', 'First Kill']
    }
]

const getChallenge = () => {
    let game, title, challenge;

    game = games[randNum(games.length)];
    title = game.name;
    challenge = game.challenge[randNum(game.challenge.length)];
    pushups += randNum(10);

    document.getElementById('name').innerHTML = title;
    document.getElementById('challenge').innerHTML = challenge;
    document.getElementById('pushups').innerHTML = `${pushups} Pushups on Failure`;
    document.getElementById('btn').innerHTML = 'Re-Roll';
    document.getElementById('reset').style.visibility = 'visible';
}

const reset = () => {
    pushups = 1;
    document.getElementById('name').innerHTML = '';
    document.getElementById('challenge').innerHTML = '';
    document.getElementById('pushups').innerHTML = '';
    document.getElementById('btn').innerHTML = 'Get Challenge';
    document.getElementById('reset').style.visibility = 'hidden';
}