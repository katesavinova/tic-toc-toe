window.addEventListener('DOMContentLoaded', () => {
  const cells = Array.from(document.querySelectorAll('.cell'));
  const displayPlayer = document.querySelector('.display-player');

  let isGameActive = true;
  let currentPlayer = 'X';

  const isValidAction = (cell) => {
    if (cell.innerText === 'X' || cell.innerText === 'O') {
      return false;
    }
    return true;
  };

  const changePlayer = () => {
    displayPlayer.classList.remove(`player${currentPlayer}`);
    currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
    displayPlayer.innerText = currentPlayer;
    displayPlayer.classList.add(`player${currentPlayer}`);
  };

  const userAction = (cell, index) => {
    if (isGameActive && isValidAction(cell)) {
      cell.innerText = currentPlayer;
      cell.classList.add(`player${currentPlayer}`);
      changePlayer();
    }
  };

  cells.forEach((cell, index) => {
    cell.addEventListener('click', () => userAction(cell, index));
  });
});
