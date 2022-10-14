import { createScore, getGames } from './getGames.js';
import displayList from './displayList.js';

const addNew = async () => {
  const addContainer = document.querySelector('.add-score-container');
  const addBtn = document.querySelector('.add-btn');
  const nameInput = document.getElementById('name');
  const scoreInput = document.getElementById('score');
  const listContainer = document.querySelector('.list-ul');

  const result = await getGames();

  addBtn.addEventListener('click', () => {
    if (nameInput.value !== '' && scoreInput.value !== '') {
      createScore(nameInput.value, scoreInput.value);
      nameInput.value = '';
      scoreInput.value = '';
      displayList(listContainer, result);
    }
  });

  addContainer.addEventListener('keypress', (e) => {
    if (nameInput.value !== '' && scoreInput.value !== '') {
      if (e.key === 'Enter') {
        createScore(nameInput.value, scoreInput.value);
        nameInput.value = '';
        scoreInput.value = '';
        displayList(listContainer, result);
      }
    }
  });
};

export default addNew;
