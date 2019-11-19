/*
GAME RULES:

- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game

*/

var scores, roundScore, activePlayer, dice;

scores = [0, 0];
roundScore = 0;
// 0 is the first player 1 is the second player, so that the scors can be read from the score array when we change those scores
activePlayer = 0;
// Can use Math.floor(Math.random() * 6) + 1 for the below as well.
dice = Math.ceil(Math.random() * 6);

document.querySelector(`#current-${activePlayer}`).textContent = dice;