/*
GAME RULES:

- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he wishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game

*/

var scores, roundScore, activePlayer;

scores = [0, 0];
roundScore = 0;
// 0 is the first player, 1 is the second player, so that the scors can be read from the score array when we change those scores
activePlayer = 0;


//textContent only changes plain text. The query selector changes the value of the element
//This is a setter
//document.querySelector(`#current-${activePlayer}`).textContent = dice;
//innerHTML lets you pass in some html values so you can add further styling such as the italics below
// document.querySelector(`#current-${activePlayer}`).innerHTML = '<em>' + dice + '</em>';

// can also store the value of an element by assigning it to a variable. This is a getter.
// var x = document.querySelector('#score-0').textContent;
// console.log(x);

// display is the property. none is the value
document.querySelector('.dice').style.display = 'none';

 document.getElementById('score-0').textContent = '0';
 document.getElementById('score-1').textContent = '0';
document.getElementById('current-0').textContent = '0';
document.getElementById('current-1').textContent = '0';

document.querySelector('.btn-roll').addEventListener('click', function() {
    // Can use Math.floor(Math.random() * 6) + 1 for the below as well.
    var dice = Math.ceil(Math.random() * 6);

    //display the correct dice number again in CSS to display it we set it to block
    var diceDOM = document.querySelector('.dice');
    diceDOM.style.display = 'block';
    diceDOM.src = 'dice-' + dice + '.png';

});