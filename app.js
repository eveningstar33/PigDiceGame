var scores, roundScore, activePlayer;

scores = [0, 0];
roundScore = 0;
activePlayer = 1;

// document.querySelector('#current-' + activePlayer).textContent = dice;
// document.querySelector('#current-' + activePlayer).innerHTML = '<em>' + dice + '</em>';

document.querySelector('.dice').style.display = 'none';

document.getElementById('score-0').textContent = '0';
document.getElementById('score-1').textContent = '0';
document.getElementById('current-0').textContent = '0';
document.getElementById('current-1').textContent = '0';

/*
  btn is called a callback function - it's a function that isn't called by us,
  but by another function. It is a funtion that we pass into another function,
  as an argument and here the EventListener method will then call that function
  for us.
*/

document.querySelector('.btn-roll').addEventListener('click', function() {

	// 1. Random number
	var dice = Math.floor(Math.random() * 6) + 1;

	// 2. Display the result
	var diceDOM = document.querySelector('.dice');
	diceDOM.style.display = 'block';
	diceDOM.src = 'dice-' + dice + '.png';
});