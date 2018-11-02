var scores, roundScore, activePlayer;

scores = [0, 0];
roundScore = 0;
activePlayer = 0;

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

	// 3. Update the round score if the rolled number was not 1
	if (dice !== 1) {
		roundScore += dice;
		document.querySelector('#current-' + activePlayer).textContent = roundScore;
	} else {
		nextPlayer();
	}
});

document.querySelector('.btn-hold').addEventListener('click', function() {
	// Add current score to global score
	scores[activePlayer] += roundScore;

	// Update the UI
	document.querySelector('#score-' + activePlayer).textContent = scores[activePlayer];

	// Check if the player won the game
	if (scores[activePlayer] >= 100) {
		document.querySelector('#name-' + activePlayer).textContent = 'Winner!';
		document.querySelector('.dice').style.display = 'none';
		document.querySelector('.player-' + activePlayer + '-panel').classList.add('winner');
		document.querySelector('.player-' + activePlayer + '-panel').classList.remove('active');
	} else {
		// Next player
		nextPlayer();
	}
});

function nextPlayer() {
		activePlayer === 0 ? activePlayer = 1 : activePlayer = 0;
		roundScore = 0;
		document.getElementById('current-0').textContent = '0';
		document.getElementById('current-1').textContent = '0';

		document.querySelector('.player-0-panel').classList.toggle('active');
		document.querySelector('.player-1-panel').classList.toggle('active');

		document.querySelector('.dice').style.display = 'none';
}